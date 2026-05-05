enum userRoles {
  Admin = "Admin",
  User = "User",
  Viewer = "Viewer",
}

const EditOrNot = (input: userRoles) => {
  if (input === userRoles.Admin || input == userRoles.User) {
    return "can edit";
  } else {
    return "can't edit";
  }
};

console.log(EditOrNot(userRoles.Admin));
