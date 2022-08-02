const _ = {
    // Clamps a number between an upp and lower number
    clamp (number, lower, upper) { 
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    // Checks to see if a given number is between two other numbers
    inRange (number, start, end) { 
        if (typeof end === 'undefined') {
            end = start;
            start = 0;
        }; // if end number is not defined, start=0 & end=start
        if (start > end) {
            let temp = end;
            end = start;
            start = temp;
        }; // if start is higher than end, it switches them around
        const isInRange = (start <= number && number < end);
        return isInRange;
    },
    words (string) {
        const words = string.split(' ');
        return words;
    },
};




// Do not write or modify code below this line.
module.exports = _;