import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

const Task  = () => {
    return (
        <Card style={{ width: '18rem' }}>
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
              <Button variant="primary">Task Done</Button>
            </Card.Body>
        </Card>
    );
}

export default Task;