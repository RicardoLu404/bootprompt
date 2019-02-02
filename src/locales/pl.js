// bootshine.js locale configuration
// locale : Polish
// author : Szczepan Cieślik

(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['../bootshine'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('../bootshine'));
    } else {
        factory(global.bootshine);
    }
}(this, function (bootshine) {
    bootshine.addLocale('pl', {
        OK      : 'OK',
        CANCEL  : 'Anuluj',
        CONFIRM : 'Potwierdź'
    });
}));