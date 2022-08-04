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
    // checks to see if an object contains a key value
    has (object, key) {
        const hasValue = object[key] !== undefined;
        return hasValue;
    },
    // inverts objects with its key and removed duplicate data
    invert (object) {
        let invertedObject = {};
        for (const key in object) {
            const originalValue = object[key];
            invertedObject[originalValue] = key;
        };
        return invertedObject;
    },
    // itterates through an object to find the predicate value and returns the first instance of that value, or undefined if it isn't in the object
    findKey (object, predicate) {
        for (const key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue === true) {
                return key;
            };
        };
        return undefined;
    },
    // drops n amount of elements from the start of an array. if n is undefined it will drop 1 element
    drop (array, n) {
        if (typeof n === 'undefined') {
            n = 1;
        };
        const droppedArray = array.slice(n);
        return droppedArray;
    },
    // takes in an array, and iterates through and drops all the elements until it reaches the defined element then it returns the rest of the array in a new array
    dropWhile (array, predicate) {
        const dropNumber = array.findIndex((element, index) => {
            return !predicate(element, index, array);
        });
        const droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
};




// Do not write or modify code below this line.
module.exports = _;