export default async function fetchDetails(country) {
    try {
      const response = await fetch(`https://restcountries.com/v3.1/name/${country}`, {
        mode: 'cors'
      });
      const data = await response.json();
      processData(data[0]);
  
    } catch (e) {
      console.error(e);
      return "There's been an error. Try again."
    }
  }

  function processData(data){
    let country = {
        OfficialName: data.name.official,
        Capital: data.capital.toString(),
        Population: data.population,
        Currency: getCurrencyNames(data.currencies),
        Subregion: data.subregion,
        Languages: getLanguageNames(data.languages),
    }
    console.log(country)
  }

  function getCurrencyNames(objKeys){
    let arr = [];
    Object.keys(objKeys).forEach(key => {
      arr.push(objKeys[key].name);
    })
    return arr.toString();
  }

  function getLanguageNames(objKeys){
    let arr = [];
    Object.keys(objKeys).forEach(key => {
      arr.push(objKeys[key]);
    })
    return arr.toString();
  }