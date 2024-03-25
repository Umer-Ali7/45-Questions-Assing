"use strict";
let p_name = "umer ali";
console.log(p_name.toLowerCase());
console.log(p_name.toUpperCase());
function toTitlecase(srt) {
    return srt.charAt(0).toUpperCase() + srt.slice(1).toLowerCase();
}
let string = "Umer Ali";
let Titlecase = toTitlecase(string);
console.log(Titlecase);
