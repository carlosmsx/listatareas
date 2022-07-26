import React from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";


const Formulario = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 d-flex">
                    <Form.Control type="text" placeholder="Ingrese una tarea" />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas />
        </div>
    );
};

export default Formulario;
