const MyArray = require('./Array');

const searchElements = require('./Alghoritms').searchElements;

function getTimeSearchMethods(elements, best) {
    let size = Math.ceil(Math.log10(10000));
    const arr = MyArray.createArray(10000, 10000);

    elements.forEach(elem => {
        let hashArr = elem.create(arr, size, best.method);

        let time = searchElements(arr, size, best.method, hashArr, elem.search);
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