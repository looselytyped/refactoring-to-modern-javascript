function getAge(user) {
  if(user.profile) {
    return user.profile.age;
  }
}

function getAgeOrDefault(user) {
  if(user.profile) {
    if(user.profile.age == null || user.profile.age == undefined) {
      return 18;
    } else {
      return user.profile.age;
    }
  }
  return 18;
}


export {
  getAge,
  getAgeOrDefault,
};
