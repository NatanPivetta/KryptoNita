
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


      
      
    }
    
  }
   

  const moedas = "USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,DOGE-BRL,LTC-BRL"
  xmlhttp.open("GET", `https://economia.awesomeapi.com.br/last/${moedas}`, true);
  xmlhttp.send();

}
