
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
