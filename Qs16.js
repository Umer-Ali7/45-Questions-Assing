"use strict";
let Guest_lisT = ["Tawab", "Habil", "Raheem", "M.Anzal"];
let UnableToAttend = "Raheem";
console.log(`${UnableToAttend},can't make it to the dinner.`);
let newGuest = "Farhan";
let Invite = Guest_lisT.indexOf(UnableToAttend);
if (Invite !== -1) {
    Guest_lisT[Invite] = newGuest;
}
;
for (let guest of Guest_lisT) {
    console.log(`Dear ${guest}, you're invited to dinner tonight!`);
}
;
console.log("\t\nGreat news! We found a bigger dinner table!\t\n");
Guest_lisT.unshift("Almas");
const midlle = Math.floor(Guest_lisT.length / 2);
Guest_lisT.splice(midlle, 0, "Uzaib");
Guest_lisT.push("Saad");
for (let guests of Guest_lisT) {
    console.log(`Dear ${guests}, you are invited to the dinner party!`);
}
;
