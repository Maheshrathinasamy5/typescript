"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApp = initializeApp;
function initializeApp(config) {
    console.log(`Initializing app with API URL: ${config.apiUrl} and Retry Count: ${config.retryCount}`);
}
