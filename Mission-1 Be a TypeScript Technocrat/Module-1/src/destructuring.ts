// object destructuring
// array destructuring

// object destructuring
const user = {
  id: 1264,
  name: {
    firstName: "Rakibul",
    lastName: "Hasan",
  },
  age: 30,
  gender: "male",
};

const {
  id: userId,
  name: { lastName: name },
} = user;
console.log(userId, name);

// array destructuring
const friends = ["Karim", "Rahim", "Jabbar"];
const [fd1, fd2, fd3] = friends;
console.log(fd1, fd2, fd3);
