var database = [
    {
        username: "Siddharth",
        password: "password"
    }
];

var newsFeeds = [
    {
        headline: "headline1"
    },
    {
        headline: "headline2"
    }
];

var user = prompt("Please enter your username: ");
var pass = prompt("Please enter your password: ");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log("Congratulations, successfully logged in!");
        console.log(newsFeeds);
    }
    else {
        console.error("Incorrect username or password");
    }
}

signIn(user, pass);