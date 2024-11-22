import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export function Home() {
  // localStorage.removeItem("favoris");
  console.log(localStorage);
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h1 className="mb-3 text-center">Application Météo</h1>
      <Link to="/meteo"><Button variant="primary">Météo</Button></Link>
    </Container>
  );
}
