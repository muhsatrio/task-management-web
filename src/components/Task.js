import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const Task  = (props) => {

    return (
        <Card border={props.completed === false ? "warning" : "success"} style={{ width: '18rem' }}>
            <Card.Header>
                Created at: {props.data.createdAt}
            </Card.Header>
            <Card.Body>
              <Card.Title>{props.data.name}</Card.Title>
              <hr/>
              <Card.Text>
                {props.data.description}
              </Card.Text>
              <hr/>
              {props.data.tags.map((tag, i) => (<Badge key={i} style={{marginRight: '3px'}} variant="primary">{tag}</Badge>))}
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