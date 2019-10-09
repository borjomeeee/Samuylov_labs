class Path {
    constructor(impT, inpI) {
        this.inputTime = impT;
        this.inputIndx = inpI;
    }
}

class Element {
    constructor(path, indx) {
        this.path = path;
        this.index = indx;
    }
}

const optimalSerialPath = new Path($('#optimal_serial-time'), $('#optimal_serial-index'));
const optimalBinPath = new Path($('#optimal_bin-time'), $('#optimal_bin-index'));
const noOptimalBinPath = new Path($('#no-optimal_bin-time'), $('#no-optimal_bin-index'));

function optimaLSerialAlghoritm(arr, key) {
    arr.push(key + 1);

    let i = 0;    
    while(key > arr[i])
        i++;

    arr.pop();
    if(key == arr[i])
        return new Element(optimalSerialPath, i);

    return new Element(optimalSerialPath, -1);
};

function optimalBinAlghoritm(arr, key) {
    let L = 0;
    let R = arr.length - 1;

    let i;
    while(R > L) {
        i = Math.floor((L + R) / 2);

        if(key <= arr[i]) {
            R = i;
        } else {
            L = ++i;
        }
    }

    if(key == arr[R])
        return new Element(optimalBinPath, R);

    
    return new Element(optimalBinPath, -1);
};

function noOptimalBinAlghoritm(arr, key) {
    let L = 0;
    let R = arr.length - 1;

    let i;
    while(R >= L) {
        i = Math.floor((L + R) / 2);

        if(key == arr[i]) {
            return new Element(noOptimalBinPath, i);
        } else if(key < arr[i]) {
            R = i - 1;
        } else {
            L = i + 1;
        }
    }

    return new Element(noOptimalBinPath, -1);
};

module.exports = {
    optimaLSerialAlghoritm: optimaLSerialAlghoritm,
    optimalBinAlghoritm: optimalBinAlghoritm,
    noOptimalBinAlghoritm: noOptimalBinAlghoritm
}