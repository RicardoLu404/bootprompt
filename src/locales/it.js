// bootprompt.js locale configuration
// locale : Italian
// author : Mauro

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../bootprompt'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../bootprompt'));
    } else {
        factory(global.bootprompt);
    }
}(this, function (bootprompt) {
    bootprompt.addLocale('it', {
        OK      : 'OK',
        CANCEL  : 'Annulla',
        CONFIRM : 'Conferma'
    });
}));