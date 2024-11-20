import { Form, Button, InputGroup, Container, Row, Col } from 'react-bootstrap';
import {useState} from 'react';

export function SearchForm({onSearch}) {
    const [input, setInput] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        // Appel de la fonction parent avec la valeur entrée par l'utilisateur et correctement mis à jour avec le onChange
        onSearch(input);

    }
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <h3 className="text-center mb-4">Recherchez votre ville</h3>
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
