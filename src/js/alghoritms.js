class Method {
    constructor(path, method) {
        this.path = path;
        this.method = method;
    }
}

const divisionMethodPath = $('#division-method');
const abcpowMethodPath = $('#optimal_bin-time');
const furlMethodPath = $('#no-optimal_bin-time');
const multiplyMethodPath = $('#optimal_serial-time');
const openAdressMethodPath = $('#optimal_bin-time');
const chainMethodPath = $('#no-optimal_bin-time');

function divisionMethod(arr) {
    let newArr = [];
    let collisionArr = [];

    arr.forEach(element => {
        let adress = (element / 997) + 1;

        if(newArr.includes(adress))
            collisionArr.push(element);

        newArr.push(adress);
    });

    return collisionArr;
}

function abcpowMethod(arr) {
    let newArr = [];
    let collisionArr = [];

    arr.forEach(element => {
        let num = String(element ** 2);
        let right = Math.floor(num.length / 2) - 2;

        let adress = Number(num.substr(right, 4));

        if(newArr.includes(adress)) {
            collisionArr.push(element);
            console.log(element ** 2, adress);
        }

        newArr.push(adress);
    });

    return collisionArr;
}

function furlMethod(arr) {
    return [];
}

function multiplyMethod(arr) {
    return [];
}

function openAdressMethod(arr) {
    return [];
}   

function chainMethod(arr) {
    return [];
}

module.exports = {
    divisionMethod: new Method(divisionMethodPath, divisionMethod),
    abcpowMethod: new Method(abcpowMethodPath, abcpowMethod),
    // furlMethod: new Method(furlMethodPath, furlMethod),
    // multiplyMethod: new Method(multiplyMethodPath, multiplyMethod),
    // openAdressMethod: new Method(openAdressMethodPath, openAdressMethod),
    // chainMethod: new Method(chainMethodPath, chainMethod)
}