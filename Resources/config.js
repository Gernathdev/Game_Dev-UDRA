//configurações do jogo
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

var environment = args.env || "test";

console.log(environment);