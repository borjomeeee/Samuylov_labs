/** JS IMPORT LIBS */

import $ from 'jquery';
import 'uikit';

/** JS MY-CUSTOM LIBS */

const 
    Alghoritms  = require('./Alghoritms'),
    Collisions  = require('./Collisions'),
    Time        = require('./Time');

class Main
{
    constructor() {

        /** PATHS TO INPUTS */
        this._paths = 
            {
                search: $('#num'),

                collisions: $('#submit-collisions'),
                time: $('#submit-equal'),

                divisionMethod: $('#division-method'),
                abcpowMethod: $('#abcpow-method'),
                furlMethod: $('#furl-method'),
                multiplyMethod: $('#multiply-method'),

                openAdressMethod: $('#open-adress-method'),
                chainMethod: $('#chain-method')
            }

        /** HASH-FUNCTIONS SCORES */
        this._hashMethods = 
            [{ 
                score: 0, 
                method: Alghoritms.divisionMethod, 
                path: this._paths.divisionMethod 
            },
            { 
                score: 0, 
                method: Alghoritms.abcpowMethod, 
                path: this._paths.abcpowMethod 
            },
            { 
                score: 0, 
                method: Alghoritms.furlMethod, 
                path: this._paths.furlMethod 
            },
            { 
                score: 0, 
                method: Alghoritms.multiplyMethod, 
                path: this._paths.multiplyMethod 
            }];

        /** SEARCH ELEMENT BY HASH ADRESS */
        this._searchMethods =
            [{ 
                time: 0,
                create: Alghoritms.openAdressCreate,
                search: Alghoritms.openAdressSearch, 
                path: this._paths.openAdressMethod 
            },
            { 
                time: 0,
                create: Alghoritms.chainMethodCreate,
                search: Alghoritms.chainMethodSearch, 
                path: this._paths.chainMethod 
            }];


        this._maxNumGetCollisions   = 100;
        this.bestHashMethod         = this._hashMethods[0];

        this._paths.search      .on('change', () => this.changeNum.call(this));

        this._paths.collisions  .on('click', () => this.getCollisons.call(this));
        this._paths.collisions  .on('click', () => this.getBestHashMethod.call(this));

        this._paths.time        .on('click', () => this.getTime.call(this));
    }

    changeNum() {
        let search          = this._paths.search;
        let maxNumEquals    = this._maxNumGetCollisions

        if(search.val() < 0) {
            search.val(0);
        } else if(search.val() > maxNumEquals) {
            search.val(maxNumEquals);
        }
    }

    getBestHashMethod() {
        let best = this._hashMethods[0];

        this._hashMethods.forEach(hm => {
            if(hm.score > best.score)
                best = hm;
        });

        return best;
    }

    getCollisons() {
        this._hashMethods.forEach(hm => hm.score = 0);

        Collisions.getCountCollisions(this._hashMethods, this._paths.search);
        Collisions.showCountCollisions(this._hashMethods);

        this.bestHashMethod = this.getBestHashMethod();
    }

    getTime() {
        Time.getTimeSearchMethods(this._searchMethods, this.bestHashMethod);
        Time.showTimeSearchMethods(this._searchMethods);
    }
}

$(function() {
    $('#preloader').addClass('hidden');

    new Main();
});