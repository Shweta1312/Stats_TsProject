import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): T;

  read() {
    this.data = fs
      .readFileSync(this.fileName, {
        //Reading the data in utf-8 format....if not written it will return buffer values
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
