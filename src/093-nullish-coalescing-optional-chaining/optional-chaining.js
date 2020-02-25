function getAge(user) {
  return user.profile?.age;
}

function getAgeOrDefault(user) {
  return user.profile?.age ?? 18;
}


export {
  getAge,
  getAgeOrDefault,
};
