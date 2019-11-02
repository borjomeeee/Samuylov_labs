function getLengthNumber(value) {
    return Math.floor(Math.log10(value)) + 1;
}

function hashGenerate(arr, size, cb) {
    let values = [];

    arr.forEach(element => {
        let adress = cb(element, size);

        values.push({ adress, element });
    });

    return values;
}

function divisionMethod(el, size) {
    let div = 10 ** (getLengthNumber(size) - 1);

    return Math.floor((el % div) + 1) + 1;
}

function abcpowMethod(el, size) {
    const numRes = getLengthNumber(size) - 1;

    let num = el ** 2;
    let numLength = getLengthNumber(num);

    if(numLength <= numRes) return num;

    let startNum = Math.floor((numLength - numRes) / 2);

    let resAdress = Math.floor(num % (10 ** (numLength - startNum)));

    let resAdressLength = getLengthNumber(resAdress);
    resAdress /= 10 ** (resAdressLength - numRes);

    return size % 10 == 0 ? 
        Math.floor(resAdress) : 
        Math.floor(resAdress * (size / (10 ** getLengthNumber(size))));
}

function furlMethod(el, size) {

    let resAdress = 0;
    let value = el;

    let div = size;

    while (value != 0) {
        resAdress += value % div;

        value = Math.floor(value / div);
    };

    return resAdress % div;
}

function multiplyMethod(el, size) {
    let m = size;

    const A = (Math.pow(5, 0.5) - 1) / 2;

    let resAdress = A * el; 

    return Math.floor((resAdress % 1) * m);
}

function openAdressCreate(arr, size, cb) {
    let hashArr = [];

    arr.forEach(elem => {
        let adress = cb(elem, size);

        if(hashArr[adress] != undefined) {
            let startAdress = adress;

            while(++startAdress != adress) {
                if(startAdress == arr.length)
                    startAdress = 0;

                if(hashArr[startAdress] == undefined) {
                    hashArr[startAdress] = elem;
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
    console.log(arr, hashArr);
    arr.forEach(elem => {
        let adress = cb(elem, size);

        while(hashArr[adress] != elem) {
            adress++;

            if(adress == arr.length)
                adress = 0;
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