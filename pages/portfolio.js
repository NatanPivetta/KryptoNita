
const myInterval = setInterval(clock, 1000);



function createRow(table_list) {
  moeda = document.getElementById("moeda").value;
  qntd = document.querySelector("#qntd").value;
  buyValue = document.querySelector("#buyValue").value;

  var currency;
  if (moeda === 'btc') { currency = btc };
  if (moeda === 'eth') { currency = eth };
  if (moeda === 'usd') { currency = usd };
  if (moeda === 'eur') { currency = eur };
  if (moeda === 'doge') { currency = doge };
  if (moeda === 'ltc') { currency = ltc };

  console.log(currency.bid);
  var gain = Number(currency.bid - buyValue).toFixed(3);
  var gainPct = Number((gain * 100) / buyValue).toFixed(3);
  var tabela = document.getElementById("table_list_1");
  var numLinhas = tabela.rows.lenght;
  var linhas = tabela.insertRow(numLinhas);
  var cel1 = linhas.insertCell(0);
  var cel2 = linhas.insertCell(1);
  var cel3 = linhas.insertCell(2);
  var cel4 = linhas.insertCell(3);
  var cel5 = linhas.insertCell(4);
  console.log(gain);
  cel1.innerHTML = `${moeda}`;
  cel2.innerHTML = `${qntd}`;
  cel3.innerHTML = `R$ ${buyValue}`;
  cel4.innerHTML = `R$ ${gain}`;
  cel5.innerHTML = `${gainPct} %`;


  document.getElementById("moeda").value = "";
  document.getElementById("qntd").value = "";
  document.getElementById("buyValue").value = "";

}


function clock() {


  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      myObj = JSON.parse(this.responseText);
      btc = myObj.BTCBRL;
      eth = myObj.ETHBRL;
      usd = myObj.USDBRL;
      eur = myObj.EURBRL;
      doge = myObj.DOGEBRL;
      ltc = myObj.LTCBRL;


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

      // receber dados do fomulário


    }

  }



  const moedas = "USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL,DOGE-BRL,LTC-BRL"
  xmlhttp.open("GET", `https://economia.awesomeapi.com.br/last/${moedas}`, true);
  xmlhttp.send();

}
