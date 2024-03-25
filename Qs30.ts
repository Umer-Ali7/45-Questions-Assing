let username = ["Admin","Umer","Ali","tawab","M.Anzal"];

username.forEach(username => {
    if (username == "Admin") {
        console.log("Hello admin, would you like to see a status report?");
        
    } else {
          console.log(`Hello ${username}, thank you for logging in again.`);
    }
});