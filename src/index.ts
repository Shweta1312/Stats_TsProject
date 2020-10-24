// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';

import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.forCsv('football.csv');
matchReader.load();

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// );

const summary = Summary.winsAnalysisWithConsoleReport('Liverpool');
summary.buildAndPrintReport(matchReader.matches);
