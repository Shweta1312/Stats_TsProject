import { read } from 'fs';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

const reader = new CsvFileReader('football.csv');
reader.read();
let manUnitedWins = 0;

const info = reader.data[0][0]
console.log(info);


for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWIn) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} matches`);
