const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/blue-planet.png") {
        myImage.setAttribute("src", "images/green-planet.png");
    } else {
        myImage.setAttribute("src", "images/blue-planet.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const userName = localStorage.getItem("name");
    setHeading(userName);
}

myButton.onclick = setUserName;

function setUserName() {
    const userName = prompt("Please enter your name.");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        setHeading(userName);
    }
}

function setHeading(userName) {
    myHeading.textContent = `Welcome to My Website, ${userName}!`;
}