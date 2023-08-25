var database = [
    {
        username: "Siddharth",
        password: "password"
    },
    {
        username: "Abhishek",
        password: "password"
    },
    {
        username: "Tanuja",
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

function checkUser(user, pass) {
    for(var i=0; i<database.length; i++) {
        if(user === database[i].username && pass === database[i].password) {
            console.log("Congratulations, successfully logged in!");
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if(checkUser(user, pass)) {
        console.log("Congratulations, successfully logged in!");
        console.log(newsFeeds);
    }
    else {
        console.error("Incorrect username or password");
    }
}

signIn(user, pass);