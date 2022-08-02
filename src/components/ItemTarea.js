import React from 'react';
import {ListGroup} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ItemTarea = (props) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {props.tareaCargada}
            <Button variant="danger">Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;