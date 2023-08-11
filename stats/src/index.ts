import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCSV('football.csv');
const summary = Summary.winsAnalysisWithHTMLReport('Man United');

matchReader.load();
summary.buildAndPrint(matchReader.matches);
