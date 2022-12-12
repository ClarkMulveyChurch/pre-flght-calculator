import React, { useState } from "react";
import {
  fetchWeatherMetar,
  fetchWeatherTaf,
} from "../utils/weather/fetchWeather";

const Weather = () => {
  const [airportCode, setAirportCode] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [fetchErrorMessage, setFetchErrorMessage] = useState(false);

  const getWeather = async () => {
    if (airportCode) {
      var metar = await fetchWeatherMetar(airportCode);
      var taf = await fetchWeatherTaf(airportCode);
    }
    if (metar && taf) {
      setFetchErrorMessage(false);
      setWeatherData({
        metar: {
          data: metar.raw_text,
          time: metar.observed,
          place: metar.station.name,
        },
        taf: {
          data: taf.raw_text,
          bulletin: taf.timestamp.bulletin,
          from: taf.timestamp.from,
          issued: taf.timestamp.issued,
          to: taf.timestamp.to,
        },
      });
    } else {
      setFetchErrorMessage(true);
    }
  };

  return (
    <>
      {navigator.onLine ? (
        <>
          <h2>Weather Information</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              getWeather();
            }}
          >
            <label>
              Airport Code:
              <input
                type="text"
                value={airportCode.name}
                onChange={(e) => {
                  setAirportCode(e.target.value);
                }}
              />
            </label>
            <input
              type="submit"
              value="Submit"
              className="weatherSubmitButton"
            />
          </form>
          {fetchErrorMessage && <div>Please try a different airport code</div>}
          {weatherData && (
            <>
              <div>
                <h3>
                  Current Weather (
                  <span className="tooltip">
                    METAR
                    <span className="tooltiptext">
                      Meteorological Terminal Air Report
                    </span>
                  </span>
                  ):
                </h3>
                <p>Place: {weatherData.metar.place}</p>
                <p>Time: {weatherData.metar.time}</p>
                <p>Data: {weatherData.metar.data}</p>
              </div>
              <div>
                <h3>Forecasted Weather (<span className="tooltip">TAF<span className="tooltiptext">Terminal Area Forecast</span></span>):</h3>
                <p>From: {weatherData.taf.from}</p>
                <p>To: {weatherData.taf.to}</p>
                <p>Issued: {weatherData.taf.issued}</p>
                <p>Bulletin: {weatherData.taf.bulletin}</p>
                <p>Data: {weatherData.taf.data}</p>
              </div>
            </>
          )}
        </>
      ) : (
        <h3>
          Weather is only available online - if you'd like this functionality
          please connect.
        </h3>
      )}
    </>
  );
};
export default Weather;
