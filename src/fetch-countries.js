export default async function fetchCountries(continent) {
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
      console.log(data)
      return data;
  
    } catch (e) {
      console.error(e);
      return "There's been an error. Try again."
    }
  }
    
  