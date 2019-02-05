// bootprompt.js locale configuration
// locale : Persian
// author : Touhid Arastu

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../bootprompt'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../bootprompt'));
    } else {
        factory(global.bootprompt);
    }
}(this, function (bootprompt) {
    bootprompt.addLocale('fa', {
        OK      : 'قبول',
        CANCEL  : 'لغو',
        CONFIRM : 'تایید'
    });
}));