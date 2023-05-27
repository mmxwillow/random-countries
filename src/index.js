const select = document.querySelector('select');
const range = document.querySelector('input[type="range"]');
const submit = document.querySelector('button');

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
    option.id = key;
    select.appendChild(option);
})

submit.innerHTML = `Show ${range.value} countries`;

range.addEventListener('input', () => {
    submit.innerHTML = `Show ${range.value} countries`;
})