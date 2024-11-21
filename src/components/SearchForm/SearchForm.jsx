import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import {useState} from 'react';

// Props onSearch hérité de son parent permettant son exécution lors de la soumission du formulaire
export function SearchForm({onSearch}) {
    // input de l'utilisateur dans la barre de recherche, initialisé en str vide
    const [input, setInput] = useState('');
    // Gestion de l'envoi du formulaire
    const handleSubmit = (e) =>{
        e.preventDefault();
        // Appel de la fonction parent avec la valeur entrée par l'utilisateur et mis à jour avec le onChange
        onSearch(input);

    }
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <h3 className="text-center mb-4">Recherchez votre ville</h3>
                    {/* Appel de la fonction de gestion du formulaire */}
                    <Form onSubmit={handleSubmit}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Entrez le nom de votre ville..."
                                aria-label="Nom de la ville"
                                value={input}
                                // Mise à jour de input à chaque entrée utilisateur
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                                Rechercher
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
