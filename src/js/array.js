const MAX_NUM = 1000000;

const MIN_SIZE = 300000;
const MAX_SIZE = 1000000;

function getRandomNumber() {
    return Math.floor(Math.random() * MAX_NUM);
};

function getRandomSize() {
    return Math.floor(Math.random() * (MAX_SIZE - MIN_SIZE)) + MIN_SIZE;
}

function createArray() {
    let arr = [];
    
    for(let i = 0; i < getRandomSize(); i++)
        arr.push(getRandomNumber());

    return arr;
};

module.exports = {
    createArray: createArray,
    getRandom: getRandomNumber
 }