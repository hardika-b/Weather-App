async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '56bf077979bf286535b37b8b315000cc'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    const result = `Temperature in ${data.name}: ${data.main.temp}°C`;
    document.getElementById('weatherResult').innerText = result;
  } catch (error) {
    document.getElementById('weatherResult').innerText = error.message;
  }
}
