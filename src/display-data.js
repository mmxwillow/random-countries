const container = document.querySelector('.container');

export default function displayData(data){
    container.innerHTML = "";
    data.forEach(element => {
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