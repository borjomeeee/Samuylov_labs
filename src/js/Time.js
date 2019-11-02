const MyArray = require('./Array');

const searchElements = require('./Alghoritms').searchElements;

function getTimeSearchMethods(elements, best) {
    const arr = MyArray.createArray(10000, 10000);
    let length = arr.length;

    elements.forEach(elem => {
        let hashArr = elem.create(arr, length, best.method);

        let time = searchElements(arr, length, best.method, hashArr, elem.search);
        elem.time = time;
    });
}

function showTimeSearchMethods(elements) {
    elements.forEach(elem => {
        let time = elem.time;
        elem.path.val(time);
    })
}

module.exports = {
    getTimeSearchMethods: getTimeSearchMethods,
    showTimeSearchMethods: showTimeSearchMethods
}