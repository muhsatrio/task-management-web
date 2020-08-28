import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const Task  = (props) => {

    return (
        <Card border={props.completed === false ? "warning" : "success"} style={{ width: '18rem' }}>
            <Card.Header>
                Created at: 
            </Card.Header>
            <Card.Body>
              <Card.Title>Judul</Card.Title>
              <hr/>
              <Card.Text>
                Deskripsi
              </Card.Text>
              <hr/>
              <Badge variant="primary">tag 1</Badge>{' '}
              <Badge variant="primary">tag 2</Badge>{' '}
              <Badge variant="primary">tag 3</Badge>{' '}
              <br/>
              <hr/>
              { props.completed === false ? (<Button style={{ marginRight: '10px' }} variant="primary">Task Done</Button>) : null }
              <Button onClick={props.handleShow} style={{ marginRight: '10px' }} variant="success">Edit</Button>
              <Button variant="danger">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default Task;