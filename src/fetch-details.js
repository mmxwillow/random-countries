export default async function fetchDetails(countries) {
    try {
      const promises = await Promise.all(countries.map(country => fetch(`https://restcountries.com/v3.1/name/${country.name}`, {mode: 'cors'})));
      const arr = await Promise.all(promises.map(p => p.json()));
      const results = [];
      arr.forEach(country => {
        results.push(processData(country[0]))
      });
      document.querySelector('.error').innerHTML = "";
      return results;
  
    } catch (e) {
      document.querySelector('.error').innerHTML = "There's been an error, couldn't fetch details."
      console.error(e);
      return countries;
    }
  }

  function processData(data){
    let country = {
        OfficialName: data.name.official,
        Capital: data.capital.toString().replaceAll(",",", "),
        Population: data.population,
        Currency: getCurrencyNames(data.currencies).replaceAll(",",", "),
        Subregion: data.subregion,
        Languages: getLanguageNames(data.languages).replaceAll(",",", "),
    }
    return country;
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