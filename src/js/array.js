const MAX_NUM = 65000;

const SIZE = 1000;

function getRandomNumber() {
    return Math.floor(Math.random() * MAX_NUM);
};

function createArray() {
    let arr = [];
    
    for(let i = 0; i < SIZE; i++)
        arr.push(getRandomNumber());

    return arr;
};

module.exports = {
    createArray: createArray
 }