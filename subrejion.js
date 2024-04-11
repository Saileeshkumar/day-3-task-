// Fetch data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse JSON response
    return response.json();
  })
  .then(data => {
    // Extract desired information and print to console
    data.forEach(country => {
      console.log('Country: ' + country.name.common);
      console.log('Region: ' + country.region);
      console.log('Sub-region: ' + country.subregion);
      console.log('Population: ' + country.population);
      console.log('----------------------------------------');
    });
  })
  .catch(error => console.error('Error fetching data:', error));
