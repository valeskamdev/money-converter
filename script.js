const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dollar = 5.22;
const euro = 5.58;
const india = 0.063;
const korea = 0.0041;
const china = 0.77;

const convertValues = () => {
  const realValue = document.getElementById("real-value");
  const currencyValue = document.getElementById("currency-value");
  const inputReal = document.getElementById("input-real").value;
  
  const realToDollar = inputReal / dollar;
  const realToEuro = inputReal / euro;
  const realToIndia = inputReal / india;
  const realToKorea = inputReal / korea;
  const realToChina = inputReal / china;

  console.log(realToChina);

  realValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReal);

  if (select.value === "US$ Dollar") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(realToDollar);
  }

  if (select.value === "€ Euro") {
    currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(realToEuro);
  }

  if (select.value === "₹ India") {
    currencyValue.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(realToIndia);
  }

  if (select.value === "₩ Korea") {
    currencyValue.innerHTML = new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    }).format(realToKorea);
  }

  if (select.value === "¥ China") {
    currencyValue.innerHTML = new Intl.NumberFormat("zh-CN", {
      style: "currency",
      currency: "CNY",
    }).format(realToChina);
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

  if (select.value === "₹ India") {
    currencyName.innerHTML = "India";
    currencyImg.src = "assets/india.svg";
  }

  if (select.value === "₩ Korea") {
    currencyName.innerHTML = "Korea";
    currencyImg.src = "assets/korea.svg";
  }

  if (select.value === "¥ China") {
    currencyName.innerHTML = "China";
    currencyImg.src = "assets/china.svg";
  }
  convertValues();
};

function validateMonetaryValue(event) {
  const key = event.key;
  const value = event.target.value;

  const numericValue = parseFloat(value.replace(/[,.]/g, ''));

  if (key === 'Backspace' || key === 'Delete') {
    return true;
  }

  if ((key >= '0' && key <= '9')) {
    return true;
  }

  event.preventDefault();
  return false;
}

const inputReal = document.getElementById("input-real");

inputReal.addEventListener('keydown', validateMonetaryValue);
button.addEventListener("click", convertValues);
select.addEventListener("change", changeCurrency);