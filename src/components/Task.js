import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'


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
              {props.data.tags.map((tag, i) => (<Badge key={i} style={{marginRight: '3px'}} variant="primary">{tag.value}</Badge>))}
              <br/>
              <hr/>
              { props.completed === true ? (<Button style={{ marginRight: '10px' }} variant="primary" onClick={() => props.handleEdit(props.data.id, props.data.value.rev, {completed: false})}><BsChevronLeft /></Button>) : null }
              <Button onClick={props.handleShow} style={{ marginRight: '10px' }} variant="success">Edit</Button>
              <Button style={{ marginRight: '10px' }} variant="danger" onClick={() => props.handleDelete(props.data.id, props.data.value.rev)}>Delete</Button>
              { props.completed === false ? (<Button style={{ marginRight: '10px' }} variant="primary" onClick={() => props.handleEdit(props.data.id, props.data.value.rev, {completed: true})}><BsChevronRight /></Button>) : null }
            </Card.Body>
        </Card>
    );
}

export default Task;