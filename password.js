/*
Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.

- If the user's input matches the password exactly, log out "Access Granted!"
- If the user's input does not match, log out "Access Denied!"
- If the user's input is "forgot", log out "Here is a hint"
- If the user's input is "reset", log out "Let's reset your account"

Invoke examples of the function that fullfil each condition listed above. Feel free to work locally using node, and then paste your code into this file when it runs.

CHALLENGE
- If the password set is "forgot" or "reset", aside from "Access Granted", also log: "This password you set should not be used because it glitches the system".
- If the password is less than 5 characters, log out "Your password is too short!".
*/

function passwordChecker(password, input) {
    // If the input length is too short
    if (password.length < 5) {
        console.log("Your password is too short!");
    }

    // if the input is "forgot" it will return with the hint message
    if (input === "forgot") {
        console.log("Here is a hint");
        return;
    }
    // if the input is "reset" it will return with the reset account message
    if (input === "reset") {
        console.log("Let's reset your account");
        return;
    }

    // If the input matches the password
    if (input === password) {
        console.log("Access Granted!");

        // I was not able to sucessfully complete this part but it should have outputted
        // "This password you set should not be used because it glitches the system"
        // if the password was the same as "forgot" or "reset"
        if (password === "forgot" || password === "reset") {
            console.log(
                "This password you set should not be used because it glitches the system"
            );
        }
    } else {
        console.log("Access Denied!");
    }
}

// Examples + Expected Output:

passwordChecker("carrots777", "carrots777");
// Access Granted!

passwordChecker("carrots777", "bellpeppers67");
// Access Denied!

passwordChecker("carrots777", "forgot");
// Here is a hint

passwordChecker("carrots777", "reset");
// Let's reset your account

passwordChecker("forgot", "forgot");
// Access Granted!
// This password you set should not be used because it glitches the system **

passwordChecker("hi", "hi");
// Your password is too short!
// Access Granted!
