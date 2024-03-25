let Current_User = ["usr1","usr2","usr3","usr4","usr5"];

let New_User = ["usr6","usr7","usr8"];

New_User.forEach(newUser => {
    if (Current_User.some(currentuser => currentuser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a newuser.`);
        
    } else {
        console.log(`${newUser} is available`);
        
    }
});