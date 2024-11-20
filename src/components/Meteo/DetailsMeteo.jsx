import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export function Details() {
  const [data, setData] = useState(null);
  const { loading, setLoading } = useState(true);
  const { insee } = useParams();
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
            // Appel API avec le code insee récupéré avec useParams()
          `https://api.meteo-concept.com/api/forecast/daily?token=c7b2f341dd0f28256e0b32278ad71f1e1b1f40e9d8126f625ce9ee193011b9e4&insee=${insee}`
        );
        console.log(res);
        // res.data contient à la fois l'élément city ainsi que les 14 éléments prévisions (forecast)
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };
    fetchWeather();
  }, [insee]);
  // Page de chargement afin de charger les données de la requête avant l'affichage final de la page
  if (!data) {
    return <p>Chargement des informations ...</p>;
  }

  return (
    <>
      <h2>
        Prévisions des 14 prochains jours pour la ville de {data.city.name}
      </h2>
      <ul>
        {data.forecast.map((day) => (
          <li>
            Date : {day.datetime} <br></br> Probabilité de pluie :{" "}
            {day.probarain}% <br></br>Température Minimale attendue : {day.tmin}C° <br></br>Température Maximale attendue : {day.tmax}C°
          </li>
        ))}
      </ul>
    </>
  );
}
