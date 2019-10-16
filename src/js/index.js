import $ from 'jquery';
global.$ = $;

import 'uikit/dist/js/uikit';

const Alghoritms = require('./alghoritms');
const methods = Object.keys(Alghoritms).reduce((acc, val) => {
    acc.push({
        count: 0,
        methodName: val
    });

    return acc;
}, []);

const MyArray = require('./array');
const MAX_NUM_EQUALS = 10000;

const numEquals = $('#num');

function changeNum() {
    if(numEquals.val() < 0) {
        numEquals.val(0);
    } else if(numEquals.val() > MAX_NUM_EQUALS) {
        numEquals.val(MAX_NUM_EQUALS);
    }
}

function checkCollisions() {   
    function checkMethods() {
        const array = MyArray.createArray();
    
        let min = MyArray.maxNum + 1, index = -1;
        methods.forEach((el, ind) => {
            let res = Alghoritms[el.methodName].method(array);
    
            if(res.length < min) {
                min = res.length;
                index = ind;
            }

            // console.log(res.length);
        });
    
        if(index != -1)
            methods[index].count++;
    }

    const num = numEquals.val();

    for(let i = 0; i < num; i++)
        checkMethods();

    console.log(methods);
};

function timeHash() {

}

$(() => {
    $('#num').val(0);

    $('#preloader').css('opacity', 0);
    setTimeout(() => { $('#preloader').css('display', 'none') }, 2000);

    $('#num').on('change', changeNum);

    $('#submit-collisions').on('click', checkCollisions);
    $('#submit-equal').on('click', timeHash);
});