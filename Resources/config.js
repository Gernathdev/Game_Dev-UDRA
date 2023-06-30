//configurações do jogo
var args = require('minimist')(process.argv.slice(2));
import extend from 'extend';

var environment = args.env || "test";

console.log(environment);