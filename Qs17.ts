let Guest_LisT = ["Tawab", "Habil", "Raheem","M.Anzal"];
console.log("Sorry, we can only invite two people for dinner.");

while (Guest_LisT.length > 2) {
    const removedGuest = Guest_LisT.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
    
};

for (let guest of Guest_LisT) {
    console.log(`Dear ${guest}, you are still invited to the dinner party!`);
    
};

Guest_LisT.pop();
Guest_LisT.pop();

console.log("Final list of guests:", Guest_LisT);
