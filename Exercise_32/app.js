// Exercise 32

let current_users = ["eric1", "john", "alice3", "mir32", "hasan32"];

let new_users = ["eric132", "john", "alice331", "mir", "hasan32"];

new_users.forEach((new_user) => {
  const is_user = current_users.find((current_user) => {
    return current_user.toLowerCase() === new_user.toLowerCase();
  });

  if (is_user) {
    console.log("You will need to enter a new username.");
  } else {
    console.log("That username is available.");
  }
});
