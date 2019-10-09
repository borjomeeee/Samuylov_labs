import $ from 'jquery';
global.$ = $;

import 'uikit/dist/js/uikit';

const Alghoritms = require('./alghoritms');
const MyArray = require('./array');

const COUNT_SEARCH = 40000;

function showOutput(elem, time) {
    if(elem.index < 0)
        elem.path.inputIndx.val('Нет');
    else    
        elem.path.inputIndx.val(elem.index);

    elem.path.inputTime.val(time);
}

function searchWithAlghoritm(arr, key, callback, count = COUNT_SEARCH) {
    let outputElement;

    let start = new Date().getTime();

    for(let i = 0; i < count; i++)
        outputElement = callback(arr, key);

    let diffTime = count == COUNT_SEARCH ? new Date().getTime() - start : (new Date().getTime() - start) * 100;

    return showOutput(outputElement, diffTime);
};

$(() => {
    function main() {   
        $('#submit').on('click', () => {
            let key = $('#key').val();
    
            searchWithAlghoritm(sortArray, key, Alghoritms.optimaLSerialAlghoritm, COUNT_SEARCH / 100),
            searchWithAlghoritm(sortArray, key, Alghoritms.optimalBinAlghoritm),
            searchWithAlghoritm(sortArray, key, Alghoritms.noOptimalBinAlghoritm)
        })
    };

    $('#key').val(MyArray.getRandom());
    const sortArray = MyArray.createArray().sort((first, second) => first - second);

    $('#preloader').css('opacity', 0);
    setTimeout(() => { $('#preloader').css('display', 'none') }, 2000);
    
    main();
});