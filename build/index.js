"use strict";
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { CsvFileReader } from './CsvFileReader';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
var matchReader = MatchReader_1.MatchReader.forCsv('football.csv');
matchReader.load();
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// );
var summary = Summary_1.Summary.winsAnalysisWithConsoleReport('Liverpool');
summary.buildAndPrintReport(matchReader.matches);
