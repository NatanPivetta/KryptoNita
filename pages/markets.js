
const myInterval = setInterval(clock, 1000);

function clock() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      var btc = myObj.BTCBRL;
      var eth = myObj.ETHBRL;
      var usd = myObj.USDBRL;
      var eur = myObj.EURBRL;
      var doge = myObj.DOGEBRL;
      var ltc = myObj.LTCBRL;


      // alteração dos elementos na price bar

      document.getElementById("btcprice").innerHTML = `BTC: R$ ${btc.high}`;
      document.getElementById("ethprice").innerHTML = `ETH: R$ ${eth.high}`;
      document.getElementById("usdprice").innerHTML = `USD: R$ ${usd.high}`;
      document.getElementById("eurprice").innerHTML = `EUR: R$ ${eur.high}`;
      document.getElementById("dogeprice").innerHTML = `DOGE: R$ ${doge.high}`;
      document.getElementById("ltcprice").innerHTML = `LTC: R$ ${ltc.high}`;

      document.getElementById("btcprice1").innerHTML = `BTC: R$ ${btc.high}`;
      document.getElementById("ethprice1").innerHTML = `ETH: R$ ${eth.high}`;
      document.getElementById("usdprice1").innerHTML = `USD: R$ ${usd.high}`;
      document.getElementById("eurprice1").innerHTML = `EUR: R$ ${eur.high}`;
      document.getElementById("dogeprice1").innerHTML = `DOGE: R$ ${doge.high}`;
      document.getElementById("ltcprice1").innerHTML = `LTC: R$ ${ltc.high}`;


      // alteração dos elementos da tabela

      document.getElementById("btc_price").innerHTML = `R$ ${btc.bid}`;
      document.getElementById("eth_price").innerHTML = `R$ ${eth.bid}`;
      document.getElementById("usd_price").innerHTML = `R$ ${usd.bid}`;
      document.getElementById("eur_price").innerHTML = `R$ ${eur.bid}`;
      document.getElementById("doge_price").innerHTML = `R$ ${doge.bid}`;
      document.getElementById("ltc_price").innerHTML = `R$ ${ltc.bid}`;


      document.getElementById("btc_var").innerHTML = `${btc.pctChange} %`;
      document.getElementById("eth_var").innerHTML = `${eth.pctChange} %`;
      document.getElementById("usd_var").innerHTML = `${usd.pctChange} %`;
      document.getElementById("eur_var").innerHTML = `${eur.pctChange} %`;
      document.getElementById("doge_var").innerHTML = `${doge.pctChange} %`;
      document.getElementById("ltc_var").innerHTML = `${ltc.pctChange} %`;

      // document.getElementById("card1-price").innerHTML = `R$ ${btc.high}`;
    }
    
  }
   

  const moedas = "USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,DOGE-BRL,LTC-BRL"
  xmlhttp.open("GET", `https://economia.awesomeapi.com.br/last/${moedas}`, true);
  xmlhttp.send();

}
