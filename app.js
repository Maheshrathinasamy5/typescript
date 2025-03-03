"use strict";
//Q12 - Using the Declaration File
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const SomeLibrary_1 = require("./SomeLibrary"); // Use "./SomeLibrary" instead of "SomeLibrary"
const config = {
    apiUrl: "https://api.example.com",
    retryCount: 3,
};
(0, SomeLibrary_1.initializeApp)(config);
console.log("Application initialized.");
