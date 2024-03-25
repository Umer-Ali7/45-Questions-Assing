"use strict";
let Guest_list = ["Tawab", "Habil", "Raheem", "M.Anzal"];
let unableToAttend = "Raheem";
console.log(`${unableToAttend},can't make it to the dinner.`);
let newGuests = "Farhan";
let invite = Guest_list.indexOf(unableToAttend);
if (invite !== -1) {
    Guest_list[invite] = newGuests;
}
;
for (let guest of Guest_list) {
    console.log(`Dear ${guest}, you're invited to dinner tonight!`);
}
;
