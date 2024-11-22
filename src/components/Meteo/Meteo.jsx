import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { SearchForm } from "../SearchForm/SearchForm";
import ListGroup from 'react-bootstrap/ListGroup';
import {  Container, Row, Col, Button } from 'react-bootstrap';
import { addFav, removeFav } from "../../features/favoris/favorisSlice";
import { useDispatch } from "react-redux";

export function Meteo() {
  const [data, setData] = useState([]);
  // variable qui changera en fonction de l'entrée utilisateur. Paris par défaut pour éviter les erreurs au chargement de la page
  const [ville, setVille] = useState("Paris");
  // Hook useDispatch pour
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.meteo-concept.com/api/location/cities",
          {
            params: {
              token:
                "c7b2f341dd0f28256e0b32278ad71f1e1b1f40e9d8126f625ce9ee193011b9e4", // Mettre le token en variable d'environnement pour plus de sécurité ?
              // clef search dynamique dont la valeur dépend de l'entrée utilisateur dans la barre de recherche
              search: ville,
            },
          }
        );
        console.log(res.data);
        // On récupère uniquement les éléments cities de la response
        setData(res.data.cities);
      } catch (err) {
        console.log(err);
      }
    };
    fetchWeather();
  }, [ville]); // Elément ville chargé dans le tableau de dépendance puisqu'il sera amené à changer
  console.log(data);
  // Fonction de gestion de la recherche. On récupère l'entrée utilisateur et on met à jour la ville recherché. L'élément ville étant modifié et chargé dans le tableau de dépendances, useEffect se met à jour et fetchWeather fait une nouvelle requête à l'API
  const handleSearch = (userInput) => {
    setVille(userInput);
  };

  return (
    <Container className='mt-4'>
      {/*
      onSearch est une props qui est passée au component SearchForm et sera appellée lors de la soumission du formulaire par l'utilisateur et récupère l'input soumis */}
      <SearchForm onSearch={handleSearch} />
      <Row justify-content-center>
        <Col>
      <h1>Résultat de la recherche</h1>
      <ListGroup>
        {/*Affichage du contenu de la requête. Utilisation de .map() au lieu de foreach() dans un return, le foreach exécutant seulement des actions et ne retournant rien. */}
        {data.map((city) => (
            <div>
          <Link to={`/details/${city.insee}`}>
            <ListGroup.Item key={city.insee} >{city.name}, Code Postal : {city.cp} </ListGroup.Item>{" "}
          </Link>
          {/* Ajout de l'objet city en favoris afin d'accéder à ses différents paramètres en temps voulu (code insee, cp, nom de la ville etc) */}
            <Button key={city.insee} onClick={() => dispatch(addFav(city))}>Favoris</Button>

          </div>
        ))}
      </ListGroup>
        </Col>
      </Row>
    </Container>

  );
}
