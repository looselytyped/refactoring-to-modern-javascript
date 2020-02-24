/* eslint-disable */
import fs from 'fs';
import moment from 'moment';
import http from 'http';

function calculateStats(categories, subCategories, expenses, startDate, endDate) {
  var start = startDate;
  if (!start) {
    start = moment().startOf('month');
  }
  var end = endDate;
  if (!end) {
    end = moment().endOf('month');
  }

  var categoriesToSubCategoriesMap = {};
  categories.forEach(function(c) {
    subCategories
      .filter(function(s) {
        return s.fk_category_id === c.id;
      })
      .forEach(function(s) {
        if (!categoriesToSubCategoriesMap[c.name]) {
          categoriesToSubCategoriesMap[c.name] = {};
        }
        categoriesToSubCategoriesMap[c.name][s.name] = 0;
      });
  });

  for (var ex in expenses) {
    var e = expenses[ex];
    var expenseDate = moment(e.date);
    if (expenseDate.isSameOrAfter(start) && expenseDate.isSameOrBefore(end)) {
      var catName = categories.find(function(c) {
        return c.id === e.category_id
      }).name;
      var subCatName = subCategories.find(function(s) {
        return s.id === e.subcategory_id
      }).name;

      var subCatRollup = categoriesToSubCategoriesMap[catName];
      subCatRollup[subCatName] = subCatRollup[subCatName] + e.amount;
    }
  }
  return categoriesToSubCategoriesMap;
};

function textReport(summary, indent) {
  var formatToCurrency = function(amt) {
    return amt.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  indent = indent ? indent : '';
  var str = indent ? indent : '';
  for(var k in summary) {
    str += '\n' + indent + k;
    var v = summary[k];
    if(v instanceof Object) {
      str += '\n\t' + textReport(v, indent + '\t');
    } else {
      str += " -> " + formatToCurrency(v);
    }
  }
  return str.trim();
};

// inspired by https://stackoverflow.com/a/4369592
var RequestAll = (function() {
  var numRequestToComplete, requestsCompleted, callBacks;

  return function(options) {
    if (!options) options = {};

    numRequestToComplete = options.numRequest || 0;
    requestsCompleted = options.requestsCompleted || 0;
    callBacks = [];

    this.done = false;

    this.fireCallbacks = function() {
      for (var i = 0; i < callBacks.length; i++) {
        callBacks[i]();
      }
      this.done = true;
    };

    this.addCallbackToQueue = function(isComplete, callback) {
      if (isComplete) requestsCompleted++;
      if (callback) callBacks.push(callback);
      if (requestsCompleted == numRequestToComplete) this.fireCallbacks();
    };
  };
})();

var makeAjaxCall = function(url, callback) {
  http.get(url, function(resp) {
    var data = '';

    // A chunk of data has been recieved.
    resp.on('data', function(chunk) {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', function() {
      callback(JSON.parse(data));
    });
  }).on("error", function(err) {
    console.log("Error: " + err.message);
  });
}

var requestCallback = new RequestAll({
  numRequest: 3
});

var categories, subCategories, expenses;
makeAjaxCall('http://localhost:3000/categories', function(data) {
  requestCallback.addCallbackToQueue(true, function() {
    categories = data;
  });
});

makeAjaxCall('http://localhost:3000/subCategories', function(data) {
  requestCallback.addCallbackToQueue(true, function() {
    subCategories = data;
  });
});

makeAjaxCall('http://localhost:3000/expenses', function(data) {
  requestCallback.addCallbackToQueue(true, function() {
    expenses = data;
  });
});

// inspired by https://stackoverflow.com/a/14811679
function waitfor(test, callback) {
  while (!test()) {
    setTimeout(function() {
      waitfor(test, callback);
    }, 50);
    return;
  }
  callback();
}

waitfor(function() {
  return requestCallback.done;
}, function() {
  var totals = calculateStats(categories, subCategories, expenses);
  console.log(textReport(totals));
});
