import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public fileName: string) {}

  read() {
    this.data = fs
      .readFileSync(this.fileName, {
        //Reading the data in utf-8 format....if not written it will return buffer values
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
