const friend = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["David", "Eve"];
const collegeFriends = ["Frank", "Grace"];

const allFriends = [...friend, ...schoolFriends, ...collegeFriends];

console.log(allFriends);

const user = { name: "Shuvo", phoneNumber: "01521711716" };
const otherInfo = { hobby: "Reading", profession: "Developer" };
const userInfo = { ...user, ...otherInfo };
console.log(userInfo);

// rest
const sendInvite = (friend1: string, friend2: string, friend3: string) => {
  console.log(`Invitation sent to ${friend1} ${friend2} ${friend3}`);
};
sendInvite("Alice", "Bob", "Charlie");
