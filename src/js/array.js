function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
};

function createArray(size, max) {
    let arr = [];
    
    for(let i = 0; i < size; i++)
        arr.push(getRandomNumber(max));

    return arr;
};

module.exports = {
    createArray: createArray,
 }