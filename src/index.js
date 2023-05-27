import fetchCountries from "./fetch-countries";

const select = document.querySelector('select');
const range = document.querySelector('input[type="range"]');
const submit = document.querySelector('button');
const form = document.querySelector('form');

const continents = {
    AF: 'Africa',
    AN: 'Antarctica',
    AS: 'Asia',
    EU: 'Europe',
    NA: 'North America',
    OC: 'Ocenia',
    SA: 'South America'
}

Object.entries(continents).forEach(entry => {
    const [key, value] = entry;
    const option = document.createElement('option');
    option.innerHTML = value;
    option.value = key;
    option.id = key;
    select.appendChild(option);
})

submit.innerHTML = `Show ${range.value} countries`;

range.addEventListener('input', () => {
    submit.innerHTML = `Show ${range.value} countries`;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let countries = fetchCountries(select.value, range.value);
})
