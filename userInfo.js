"use strict";
// Q2: Function to return user info
function getUserInfo(age, isActive) {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
}
let userage = 25;
let isActive = true;
console.log(getUserInfo(userage, isActive));
