import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import {  Container, Row, Col, Card } from 'react-bootstrap';

export function Details() {
  const [data, setData] = useState(null);
  const [loading, setLoading]  = useState(true);
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
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6} className="text-center">
          <h2>
            Prévisions des 14 prochains jours pour la ville de {data.city.name}
          </h2>
        </Col>
      </Row>
      <Row className="mt-3">
        {data.forecast.map((day, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Date : {day.datetime}</Card.Title>
                <Card.Text>
                  <strong>Probabilité de pluie :</strong> {day.probarain}% <br />
                  <strong>Température Minimale :</strong> {day.tmin}°C <br />
                  <strong>Température Maximale :</strong> {day.tmax}°C
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
