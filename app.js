// const request = require('request');

const moedas = 'USD-BRL,BTC-BRL,ETH-BRL';

const options = {
    url: ` https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    headers: {
        'Accept': 'aplication/json',
        'Accept-charset': 'utf-8' 
    }
}

    const callback_BTC = function (err, res, body) {
    let json = JSON.parse(body);
    const cotacao = json.BTCBRL['bid'];
    const code = json.BTCBRL['code'];
    const codein = json.BTCBRL['codein'];
    const pctVar = json.BTCBRL['pctChange'];
    //console.log(json.BTCBRL)
    console.log(code +"/"+ codein);
    console.log('R$ ' + cotacao);
    console.log(pctVar);
    console.log('');

}

const callback_ETH = function (err, res, body) {
    let json = JSON.parse(body);
    const cotacao = json.ETHBRL['bid'];
    const code = json.ETHBRL['code'];
    const codein = json.ETHBRL['codein'];
    const pctVar = json.ETHBRL['pctChange'];
    // console.log(json.ETHBRL)
    console.log(code +"/"+ codein);
    console.log('R$ ' + cotacao);
    console.log(pctVar);

}

//request(options, callback_BTC);
//request(options, callback_ETH);

//document.getElementById("btc").innerHTML = `${callback_BTC.code} / ${callback_BTC.codein}`;
//document.getElementById("preco").innerHTML = `${callback_BTC.cotacao}`;


//const myInterval = setInterval(clock, 1000);

//function clock() {
  //  document.getElementById("btc").innerHTML = `${callback_BTC.code} / ${callback_BTC.codein}`;
    //document.getElementById("preco_btc").innerHTML = `${callback_BTC.cotacao}`;

//}

