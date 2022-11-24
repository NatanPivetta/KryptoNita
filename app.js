const request = require('request');

const moedas = 'USD-BRL,BTC-BRL,ETH-BRL';

const options = {
    url: ` https://economia.awesomeapi.com.br/last/${moedas}`,
    method: 'GET',
    headers: {
        'Accept': 'aplication/json',
        'Accept-charset': 'utf-8' 
    }
}

    function callback_BTC(err, res, body) {
    let json = JSON.parse(body);
    const bid = json.BTCBRL['bid'];
    const code = json.BTCBRL['code'];
    const codein = json.BTCBRL['codein'];
    const pctChange = json.BTCBRL['pctChange'];
    const BTC_BRL =json.BTCBRL;
    console.log(BTC_BRL)
    // console.log(code +"/"+ codein);
    // console.log('R$ ' + cotacao);
    // console.log(pctVar);
    // console.log('');

}

    function callback_ETH (err, res, body) {
    let json = JSON.parse(body);
    const bid = json.ETHBRL['bid'];
    const code = json.ETHBRL['code'];
    const codein = json.ETHBRL['codein'];
    const pctChange = json.ETHBRL['pctChange'];
    
    // console.log(code +"/"+ codein);
    // console.log('R$ ' + cotacao);
    // console.log(pctVar);
    
}



let btc_json = request(options, callback_BTC);
let eth_json = request(options, callback_ETH);

// document.getElementById("btc").innerHTML = `${callback_BTC.code} / ${callback_BTC.codein}`;
// document.getElementById("preco").innerHTML = `${callback_BTC.cotacao}`;


// const myInterval = setInterval(clock, 1000);

// function clock() {
//     document.getElementById("btc").innerHTML = `${callback_BTC.code} / ${callback_BTC.codein}`;
//     document.getElementById("preco_btc").innerHTML = `${callback_BTC.cotacao}`;

// }
