// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const usernames = [];
const ans1 = array.forEach(obj => {
  return usernames.push(`${obj.username}!`);
});
console.log("ans1", ans1);

//Create an array using map that has all the usernames with a "? to each of the usernames
const ans2 = array.map(obj => {
  return `${obj.username}?`;
});
console.log("ans2", ans2);

//Filter the array to only include users who are on team: red
const ans3 = array.filter(obj => obj.team === "red");
console.log("ans3", ans3);

//Find out the total score of all users using reduce
const ans4 = array.reduce((acc, obj) => {
  acc.score += obj.score;
  return acc;
}, {score: 0});
console.log(ans4);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	// console.log(num, i);
	// alert(num);
	return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const ans5 = array.map(obj => {
  obj.items = obj.items.map(itm => {
    return itm + "!";
  });
  return obj;
});
console.log("ans5", ans5);