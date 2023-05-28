export default async function fetchCountries(continent, amount) {
    try {
      const response = await fetch("https://countries.trevorblades.com/", {
        mode: 'cors',
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query: `query getCountries($code: ID!){
            continent(code: $code){
                countries{
                    name, code
                }
            }
          }`,
          variables:{
            code: continent
          },
        }),
      });
      const data = await response.json();
      document.querySelector('.error').innerHTML = "";
      return getRandomCountries(amount, data.data.continent.countries);
  
    } catch (e) {
      document.querySelector('.error').innerHTML = "There's been an error. Try again."
      console.error(e);
      return "There's been an error. Try again."
    }
  }

  function getRandomCountries(amount, countries){
    let arr = [];
    if(amount > countries.length){
      arr = [...countries];
    }
    else{
      for(let i = 0; i<amount; i++){
        let position = Math.floor(Math.random() * (countries.length - i));
        arr.push(countries[position]);
        countries.push(countries.splice(position, 1)[0]);
      }
    }
    return arr;
}
    
  