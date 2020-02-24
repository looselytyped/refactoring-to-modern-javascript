
function printGreeting(name, language) {
  if (!language) language = 'english';
  switch (language) {
    case 'french':
      var greeting = 'Bonjour';
      break;
    case 'spanish':
      var greeting = 'Hola';
      break;
    default:
      var greeting = 'Hello';
  }

  return greeting.toUpperCase() + "! " + name + ".";
}

function createAngularTemplate(msg) {
  return '<article class="content">\n' //
  + '  <section class="section">\n' //
  + '    <div class="col-md-12">\n' //
  + '      <div class="card">\n' //
  + '        <div class="card-block">\n' //
  + '          <div class="card-title-block">\n' //
  + '            <h3 class="title">\n' //
  + '               ' + msg + '\n' //
  + '            </h3>\n' //
  + '          </div>\n' //
  + '        </div>\n' //
  + '      </div>\n' //
  + '    </div>\n' //
  + '  </section>\n' //
  + '</article>';
}

export {
  printGreeting,
  createAngularTemplate,
};
