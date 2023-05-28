const container = document.querySelector('.container');

export default function displayData(data){
    container.innerHTML = "";
    let countries = data.sort(compareName);
    countries.forEach(element => {
        const div = document.createElement('div');
        div.className = "card";
        Object.entries(element).forEach(entry => {
            const [key, value] = entry;
            const pKey = document.createElement('p');
            const pValue = document.createElement('p');
            pKey.className = 'key';
            pValue.className = 'value';
            pKey.innerHTML = key;
            pValue.innerHTML = value;
            div.appendChild(pKey);
            div.appendChild(pValue);
        })
        container.appendChild(div);
    })
}

function compareName(a,b){
    let name1 = Object.values(a)[0].toUpperCase();
    let name2 = Object.values(b)[0].toUpperCase();

    let comparison = 0;

    if (name1 > name2) {
        comparison = 1;
    } else if (name1 < name2) {
        comparison = -1;
    }
    return comparison;
}