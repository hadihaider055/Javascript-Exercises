// Exercise 31

let usernames = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach((username) => {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
});

usernames = [];

usernames.length === 0
  ? console.log("We need to find some users!")
  : usernames.forEach((username) => {
      if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
      } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
      }
    });
