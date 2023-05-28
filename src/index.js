import fetchCountries from "./fetch-countries";
import fetchDetails from "./fetch-details";
import displayData from "./display-data";

const select = document.querySelector("select");
const range = document.querySelector('input[type="number"]');
const submit = document.querySelector("button");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const continents = {
  AF: "Africa",
  AN: "Antarctica",
  AS: "Asia",
  EU: "Europe",
  NA: "North America",
  OC: "Ocenia",
  SA: "South America",
};

Object.entries(continents).forEach((entry) => {
  const [key, value] = entry;
  const option = document.createElement("option");
  option.innerHTML = value;
  option.value = key;
  option.id = key;
  select.appendChild(option);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  container.innerHTML = "Loading...";
  fetchCountries(select.value, range.value).then((result) => {
    fetchDetails(result).then((countries) => displayData(countries));
  });
});

range.addEventListener("input", validateInput);

function validateInput() {
  if (range.value >= 2 && range.value <= 10) {
    submit.disabled = false;
    form.removeAttribute('data-error');
  }else{
    submit.disabled = true;
    form.setAttribute('data-error', 'Has to be a number between 1 and 11.')
  }
}
