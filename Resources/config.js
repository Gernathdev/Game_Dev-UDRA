//Importando bibliotecas necessárias
var args = require('minimist')(process.argv.slice(2));
var extend = require('extend');

//definindo a váriável do ambiente do servidor (teste ou produção)
var environment = args.env || "test";

console.log(environment);

//definindo configurações comuns com Json
var common_conf = {
    name: "UDRA MMO Server",
    version: "0.0.1a",
    environment: environment,
    max_player: 100,
    data_paths:{
        items: __dirname + "\\Game Data\\" + "Items\\",
        maps: __dirname + "\\Game Data\\" + "maps\\"       
    },
    starting_zone: "map_start_point"
};
//configurações de variáveis específicas do ambiente (teste ou produção, alfa test, beta test)
var conf = {
    production: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8081,
        database: "sqlite: //127.0.0.1/udradb_prod."
    },
    test: {
        ip: args.ip || "0.0.0.0",
        port: args.port || 8082,
        database: "sqlite: //127.0.0.1/udradb_test."
    }
};

extend(false, conf.production, common_conf);
extend(false, conf.test, common_conf);

module.exports = config = conf[environment];

//conecta no banco sqlite
//escuta as internetes nas portas 8081 (teste) e 8082 (produção)
//carrega as configurações do jogo, inicializadores, modelos e recursos (itens, mapas e qualquer outra bosta)
//verifica se o cliente está ativo, terminou ou deu erro
