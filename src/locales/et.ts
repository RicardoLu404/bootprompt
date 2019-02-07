// bootprompt.js locale configuration
// locale : Estonian
// author : Pavel Krõlov

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../bootprompt'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../bootprompt'));
    } else {
        factory(global.bootprompt);
    }
}(this, function (bootprompt) {
    bootprompt.addLocale('et', {
        OK      : 'OK',
        CANCEL  : 'Katkesta',
        CONFIRM : 'OK'
    });
}));