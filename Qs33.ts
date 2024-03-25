let OridnalNum = [1,2,3,4,5,6,7,8,9];

OridnalNum.forEach(Number =>   
     {
         let suffix = "th";
    if (Number == 1) {
        suffix = "st";
    } else if (Number == 2) {
        suffix = "nd";
    } else if (Number == 3) {
        suffix = "rd";
    } else if (Number == 4) {
        suffix = "th";
    } else if (Number == 5) {
        suffix = "th";
    } else if (Number == 6) {
        suffix = "th";
    } else if (Number == 7) {
        suffix = "th";
    } else if (Number == 8) {
        suffix = "th";
    } else if (Number == 9) {
        suffix = "th";
    };
    console.log(`${Number}${suffix}`);
    
});