import fetchDetails from "./fetch-details";

export default async function fetchCountries(continent, amount) {
    try {
      const response = await fetch("https://countries.trevorblades.com/", {
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
      return getRandomCountries(amount, data.data.continent.countries);
  
    } catch (e) {
      console.error(e);
      return "There's been an error. Try again."
    }
  }

  function getRandomCountries(amount, countries){
    let arr = [];
    for(let i = 0; i<amount; i++){
        let position = Math.floor(Math.random() * countries.length - i) + i;
        arr.push(countries[position]);
        countries.push(countries.splice(position, 1)[0]);
    }
    arr.forEach(country => {
      fetchDetails(country.name)
    })
    return arr;
}
    
  