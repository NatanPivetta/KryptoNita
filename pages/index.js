
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


      document.getElementById("card1-price").innerHTML = `R$ ${btc.high}`;
      document.getElementById("card1-var").innerHTML = `${btc.pctChange} %`;


      document.getElementById("card2-price").innerHTML = `R$ ${doge.high}`;
      document.getElementById("card2-var").innerHTML = `${doge.pctChange} %`;
    }

  }


  const moedas = "USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,DOGE-BRL,LTC-BRL"
  xmlhttp.open("GET", `https://economia.awesomeapi.com.br/last/${moedas}`, true);
  xmlhttp.send();

}
