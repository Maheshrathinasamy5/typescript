// Q2: Function to return user info
function getUserInfo(age: number, isActive: boolean): string {
    return `User is ${age} years old and is ${isActive ? "active" : "inactive"}.`;
  }
  
  let userage: number = 25;
  let isActive: boolean = true;
  
  console.log(getUserInfo(userage, isActive));
  