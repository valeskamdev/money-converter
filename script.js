const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const convertValues = async () => {
  const realValue = document.getElementById("real-value");
  const currencyValue = document.getElementById("currency-value");
  const inputReal = document.getElementById("input-real").value;

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high

  realValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value === "US$ Dollar") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReal / dolar);
  }

  if (select.value === "€ Euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReal / euro);
  }

  if (select.value === "Ƀ Bitcoin") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 8
    }).format(inputReal / bitcoin).replace(/BTC/,'Ƀ');
  }
};

const changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.getElementById("currency-img");

  if (select.value === "US$ Dollar") {
    currencyName.innerHTML = "American dollar";
    currencyImg.src = "assets/eua.svg";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "assets/euro.svg";
  }

  if (select.value === "Ƀ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "assets/bitcoin.svg";
  }
  convertValues();
};

const inputReal = document.getElementById("input-real");

button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);