class Path {
    constructor(imp) {
        this.inputValue = imp;
    }
}

class Element {
    constructor(path, indx) {
        this.path = path;
        this.index = indx;
    }
}

const divisionMethodPath = new Path($('#division-method'));
const abcpowMethodPath = new Path($('#optimal_bin-time'));
const furlMethodPath = new Path($('#no-optimal_bin-time'));
const multiplyMethodPath = new Path($('#optimal_serial-time'));
const openAdressMethodPath = new Path($('#optimal_bin-time'));
const chainMethodPath = new Path($('#no-optimal_bin-time'));

function divisionMethod(arr) {
    let newArr = [];
    let numCollisions = 0;

    let collisionArr = [];

    arr.forEach(element => {
        let adress = (element / 997) + 1;

        newArr.some(hash => {
            if(hash.adress == adress) {
                collisionArr.push(element);

                numCollisions++;
                return true;
            }
        });

        newArr.push({
            adress: adress,
            value: element
        });
    });

    return {
        hashArr: newArr,
        collisions: numCollisions
    };
}

function abcpowMethod(arr) {
    return new Element(abcpowMethodPath, -1);
}

function furlMethod(arr) {
    return new Element(furlMethodPath, -1);
}

function multiplyMethod(arr) {
    return new Element(multiplyMethodPath, -1);
}

function openAdressMethod(arr) {
    return new Element(openAdressMethodPath, -1);
}   

function chainMethod(arr) {
    return [divisionMethod(arr), abcpowMethod(arr), furlMethod(arr), multiplyMethod(arr)];
}

module.exports = {
    divisionMethod: divisionMethod,
    abcpowMethod: abcpowMethod,
    furlMethod: furlMethod,
    multiplyMethod: multiplyMethod,
    openAdressMethod: openAdressMethod,
    chainMethod: chainMethod
}