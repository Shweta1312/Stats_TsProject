"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var date = dateString
        .split('/') //  ['28','10','2018']
        .map(function (value) {
        return parseInt(value); // [28,10,2018]
    });
    //Format of date is ...Date(Year, Month(starts from 0), Day)
    return new Date(date[2], date[1] - 1, date[0]);
};
