document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    const apiKey = '92433c184ab84cb3ab8184630241807'; 
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                alert(data.error.message);
                return;
            }

            const cityName = data.location.name;
            const temperature = data.current.temp_c;
            const weatherDescription = data.current.condition.text;

            document.getElementById('city-name').textContent = cityName;
            document.getElementById('temperature').textContent = `${temperature} °C`;
            document.getElementById('weather-description').textContent = weatherDescription;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data');
        });
});

