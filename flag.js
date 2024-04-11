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
    // Extract flag URLs from the response and log them to the console
    data.forEach(country => {
      if (country.flags) {
        console.log(country.flags.svg); // Log SVG flag URL
        console.log(country.flags.png); // Log PNG flag URL
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));
