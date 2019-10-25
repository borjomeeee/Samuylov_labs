function hashGenerate(arr, size, cb) {
    let values = [];

    arr.forEach(element => {
        let adress = cb(element, size);

        values.push({ adress, element });
    });

    return values;
}

function divisionMethod(el, size) {
    return Math.floor(el % ((10 ** size) + 1)) + 1;
}

function abcpowMethod(el, size) {
    const numRes = size;

    let num = el ** 2;
    let numLength = Math.floor(Math.log10(num)) + 1;

    if(numLength <= numRes) return num;

    let startNum = Math.floor((numLength - numRes) / 2);
    let resAdress = Math.floor(num % (10 ** (numLength - startNum)));

    let resAdressLength = Math.floor(Math.log10(resAdress)) + 1;
    resAdress /= 10 ** (resAdressLength - numRes);

    return Math.floor(resAdress);
}

function furlMethod(el, size) {

    let resAdress = 0;
    let value = el;

    let div = 10 ** size;

    while (value != 0) {
        resAdress += value % div;

        value = Math.floor(value / div);
    };

    return resAdress % div;
}

function multiplyMethod(el, size) {
    let length = size;

    const A = 0.6180339887;
    const m = 10 ** length;

    let resAdress = A * el;

    return Math.floor((resAdress % 1) * m);
}

function openAdressCreate(arr, size, cb) {
    let hashArr = [];

    arr.forEach(elem => {
        let adress = cb(elem, size);

        if(hashArr[adress] != undefined) {
            while(++adress != arr.length) {
                if(hashArr[adress]){

                }
                else {
                    hashArr.push(elem);
                    break;
                }
            }
        } else {
            hashArr[adress] = elem;
        }
    });

    return hashArr;
}

function chainMethodCreate(arr, size, cb) {
    let hashArr = [];

    arr.forEach(elem => {
        let adress = cb(elem, size);

        if(hashArr[adress]) {
            hashArr[adress].push(elem);
        } else {
            hashArr[adress] = [];
        }
    });

    return hashArr;
}

function searchElements(arr, size, best, hashArr, cb) {
    let startDate = new Date().getTime();

    cb(arr, size, hashArr, best);

    let endDate = new Date().getTime();

    return endDate - startDate;
}

function openAdressSearch(arr, size, hashArr, cb) {
    arr.forEach(elem => {
        let adress = cb(elem, size);

        if(hashArr[adress] != elem) {
            while(adress != hashArr.length) {
                adress++;
            }
        }
    });
}

function chainMethodSearch(arr, size, hashArr, cb) {
    arr.forEach(elem => {
        let adress = cb(elem, size);

        let values = hashArr[adress];
        values.some(val => val == elem);
    });
}

module.exports = {
    divisionMethod: divisionMethod,
    abcpowMethod: abcpowMethod,
    furlMethod: furlMethod,
    multiplyMethod: multiplyMethod,

    hashGenerate: hashGenerate,

    openAdressSearch: openAdressSearch,
    chainMethodSearch: chainMethodSearch,

    openAdressCreate: openAdressCreate,
    chainMethodCreate: chainMethodCreate,

    searchElements: searchElements
}