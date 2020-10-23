import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    //Reading the data in utf-8 format....if not written it will return buffer values
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);
