// input btn for clear statement 
document.getElementById("clearstatement").onclick = function () {
    document.getElementById("statement").innerHTML = " "
}
// clear output box 
document.getElementById("clearoutput").onclick = function () {
    document.getElementById("output").innerHTML = " "
}

// Concatenate Some Strings
document.getElementById("ConcatenateSomeStrings").onclick = function () {
    let message = "The type of Text in this String"
    let userName = "Muhammad Umar"
    let banger = "!"
    let sum = (message + " " + userName + banger)
    document.getElementById("statement").innerHTML = '<p>"The type of Text in this String" + " " + "Muhammad Umar" + "!"</p>'
    document.getElementById("output").innerHTML = sum;
}

// Ask me a For user

document.getElementById("Asknameofuser").onclick = function () {

    Name = prompt("Enter your name")
    document.getElementById("statement").innerHTML = "Your Name"
    document.getElementById("output").innerHTML = Name;

}
// comparison Operators
document.getElementById("comparisonOperators").onclick = function () {
    let num1 = prompt("Enter your First num")
    let num2 = prompt("Enter your seconed num")
    if (num1 == num2) {
        document.getElementById("statement").innerHTML = "Num1=num2 == It's Equal"
        document.getElementById("output").innerHTML = "It's Equal";
    } else {
        document.getElementById("statement").innerHTML = "Num1=num2 != It's not Equal"
        document.getElementById("output").innerHTML = "It's not Equal";
    }
}

// If else If

document.getElementById("IfelseIf").onclick = function () {
    document.getElementById("statement").innerHTML = "num >= 90 == you you got a A+ Grade)"

    num = +prompt("Enter your Number")
    if (num >= 90) {
        num = "you got a A+ Grade"
        document.getElementById("statement").innerHTML = "num >= 90 == you  got a A+ Grade)"
        document.getElementById("output").innerHTML = num;
    } else if (num >= 80) {
        num = "you got a A Grade"
        document.getElementById("statement").innerHTML = "num >= 80 == you  got a A Grade)"
        document.getElementById("output").innerHTML = num;

    }
    else if (num >= 60) {
        num = "you got a B Grade"
        document.getElementById("statement").innerHTML = "num >= 90 == you got a B Grade)"
        document.getElementById("output").innerHTML = num;

    }
    else if (num >= 50) {
        num = "You got a C Grade"
        document.getElementById("statement").innerHTML = "num >= 50 == you got a c Grade)"
        document.getElementById("output").innerHTML = num;
    } else {
        num = "You are Fail"
        document.getElementById("statement").innerHTML = "num < 50 == you Are Fail)"
        document.getElementById("output").innerHTML = num;
    }
}

// Testing Sets of conditions
document.getElementById("TestingSets").onclick = function () {
    let age = prompt("Enter your age")
    let wight = prompt("Enter your Wight")
    if (age >= 50 && wight >= 40) {
        age = "you are oldest"
        document.getElementById("statement").innerHTML = "age>= 50 == you Are Oldest"
        document.getElementById("output").innerHTML = age;
    } else {
        age = "You are Young"
        document.getElementById("statement").innerHTML = "age<= 40 == you Are Young"
        document.getElementById("output").innerHTML = age;
    }

}
// login 
document.getElementById("Login").onclick = function (){
    document.getElementById("statement").innerHTML = " ";
    let userName = prompt("please enter username")
    let passWord = +prompt("please enter password")
    if (userName === "admin" && passWord === 123 ){
        document.getElementById("output").innerHTML = `<span style='color:green; font-weight:bold;'>${userName}</span>`
        document.getElementById("output").innerHTML = `<span>you are successfully logged in</span>`
    }
    else {
        document.getElementById("output").innerHTML = "Try using username = admin <br> password = 123"
    }}

