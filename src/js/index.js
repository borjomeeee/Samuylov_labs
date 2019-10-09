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
        let divisionArr = Alghoritms.divisionMethod(array);
        console.log(divisionArr.collisions);
    };

    $('#nuum').val(0);
    const array = MyArray.createArray();

    $('#preloader').css('opacity', 0);
    setTimeout(() => { $('#preloader').css('display', 'none') }, 2000);
    
    main();
});