// This is a simple JavaScript file that adds interactivity to the HTML page
// It defines a function to show an alert when a link is clicked
function sayHello() {
    alert("Hello, world from javascript!");
}

document.addEventListener("DOMContentLoaded", function() {
    const link = document.getElementById("hello-link");
    if (!link) {
        console.error("Link with ID 'hello-link' not found.");
        return;
    }
    link.addEventListener("click", function(event) {
        event.preventDefault(); 
        sayHello();
    });
});

async function getRandomJoke() {
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'text/plain'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .catch(error => {
        console.error('There was a problem fetching the joke:', error);
        return "Failed to fetch a joke. Please try again later.";
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const jokeButton = document.getElementById("joke-button");
    if (!jokeButton) {
        console.error("Button with ID 'joke-button' not found.");
        return;
    }
    jokeButton.addEventListener("click", async function() {

            const jokeDisplay = document.getElementById("joke-display");
            if (!jokeDisplay) {
                console.error("Element with ID 'joke-display' not found.");
                return;
            }
            jokeDisplay.textContent = "Loading joke...";
            const joke = await getRandomJoke();
            jokeDisplay.textContent = joke;
    });
});

function isStrongPassword(pwd) {
    if (pwd.toLowerCase().includes("password") || !(pwd.length > 8))
        return false;

    let isUpper = false;
    for(let i = 0; i < pwd.length; i++)
    {
        if(pwd[i] >= 'A' && pwd[i] <= 'Z')
        {
            isUpper = true;
            break;
        }
    }
    if(!isUpper)
        return false;

    return true;
}

function checkPassword() {
    let pwd = document.getElementById("pwdBox").value;
    if(isStrongPassword(pwd)) {
        alert("Password is Acceptable");
    } else {
        alert("Password is Invalid");
    }
}