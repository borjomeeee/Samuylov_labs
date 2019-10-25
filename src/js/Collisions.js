const MyArray = require('./Array');
const hashGenerate = require('./Alghoritms').hashGenerate;

function getCountEqualsHash(arr) {
    let count = 0;

    arr.reduce((acc, elem) => {
        let accKeys = acc.map((val) => val.adress);

        if(accKeys.includes(elem.adress)) {
            count++;
        }

        acc.push(elem);
        return acc;
    }, []);

    return count;
}

function getCountCollisions(elements, search, size) {
    let count = search.val();

    for(let i = 0; i < count; i++) {
        let size = Math.ceil(Math.log10(1000));
        let arr = MyArray.createArray(1000, 65000);

        let best = elements.reduce((acc, elem) => {
            let hashArr = hashGenerate(arr, size, elem.method);
            let num = getCountEqualsHash(hashArr);

            return num < acc.num ? { elem, num } : acc;
        }, { elem: elements[0], num: arr.length + 1 });

        best.elem.score++;
    }
}

function showCountCollisions(elements) {
    elements.forEach(elem => {
        let score = elem.score;
        elem.path.val(score);
    })
}

module.exports = {
    getCountCollisions,
    showCountCollisions,
}