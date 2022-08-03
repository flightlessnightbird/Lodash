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
    // takes a string as argument and returns the string as an array of words
    words (string) {
        const words = string.split(' ');
        return words;
    },
    // adds padding to the start and end of a string if the desired length is longer than the string
    pad (string, length) {
        if (length <= string.length) {
            return string;
        };
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
};




// Do not write or modify code below this line.
module.exports = _;