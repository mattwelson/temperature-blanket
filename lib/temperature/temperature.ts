export async function getTemperatureForLocationAndYear({
  lat,
  long,
  year,
}: {
  lat: number;
  long: number;
  year: number;
}) {
  // example URL: https://archive-api.open-meteo.com/v1/archive?latitude=51.5085&longitude=-0.1257&start_date=2023-01-01&end_date=2023-12-31&daily=temperature_2m_max
  const response = await fetch(
    `https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${long}&start_date=${year}-01-01&end_date=${year}-12-31&daily=temperature_2m_max`
  );
  const result = await response.json();
  return result;
}
