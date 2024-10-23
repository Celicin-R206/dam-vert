"use client";

import "./Meteo.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Catastrophe from "./catastrophe";
function Page() {
  const lang = "fr";
  /// Récuperation du temperature actuelle
  const [meteo, setMeteo] = useState(null);
  useEffect(() => {
    const apiKey = "1e0469c14fdccbe5688757b0a40009c4";
    const lat = -18.90981866326309;
    const lng = 47.52576108787972;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&lang=${lang}`;

    axios
      .get(url)
      .then((res) => {
        setMeteo(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  /// Récuperation du temperature actuelle
  /// Recuperation des données  météorologique durant 4jour
  const [prevision, setPrevision] = useState(null);
  useEffect(() => {
    const apiKey = "1e0469c14fdccbe5688757b0a40009c4";
    const lat = -18.90981866326309;
    const lon = 47.52576108787972;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=${lang}`;

    axios
      .get(url)
      .then((res) => {
        setPrevision(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  const list = prevision != null && prevision.list;
  console.log(list);
  /// Recuperation des données  météorologique durant 4jour

  ///Date  actuelle
  const [today, setToday] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setToday(new Date());
    }, 1000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, []);
  const formaDate = (date) => {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("fr-FR", options);
  };
  ///Date actuelle

  ///Date du 3 Prochains jours

  ///Date du 3 Prochains jours
  const now = formaDate(today);
  console.log(now);
  return (
    <>
      <div className="Meteo text-white mt-20">
        <div className="container">
          <div className="left">
            <div className="top">
              <h1>Bonjour</h1>
              <p>On est le {now} </p>
            </div>
            <div className="bottom">
              <div style={{ marginBottom: "1rem" }}>
                <img
                  src={"/assets/icons/logo.png"}
                  className="w-[12rem]"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="degre">
                <h1>
                  {meteo != null
                    ? parseInt(meteo.main.temp - 273.15)
                    : "......"}
                </h1>
                <strong>° C</strong>
              </div>
              <div className="temps">
                <h2 className="uppercase">
                  {" "}
                  {meteo != null ? meteo.weather[0].description : "......"}
                </h2>
                <span>La ville d'Antananarivo</span>
              </div>
            </div>
            <div className="bottom">
              <div className="weather">
                <span>Demain</span>
                <span>
                  {list[8] != null && parseInt(list[8].main.temp - 273.15)} °C
                </span>
                <span>{list[8] != null && list[8].weather[0].description}</span>
              </div>
              <div className="weather">
                <span>Après-demain</span>
                <span>
                  {list[16] != null && parseInt(list[16].main.temp - 273.15)} °C
                </span>
                <span>
                  {list[16] != null && list[16].weather[0].description}
                </span>
              </div>
              <div className="weather">
                <span>le Jour Suivant</span>
                <span>
                  {list[24] != null && parseInt(list[24].main.temp - 273.15)} °C
                </span>
                <span>
                  {list[24] != null && list[24].weather[0].description}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto py-8">
        <Catastrophe />
      </div>
    </>
  );
}

export default Page;
