//Q12 - Using the Declaration File

// app.ts
import { initializeApp, AppConfig } from "./SomeLibrary"; // Use "./SomeLibrary" instead of "SomeLibrary"

const config: AppConfig = {
  apiUrl: "https://api.example.com",
  retryCount: 3,
};

initializeApp(config);
console.log("Application initialized.");


