"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatcheReader_1 = require("./MatcheReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatcheReader_1.MatchReader('football.csv');
reader.read();
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWIn) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " matches");
