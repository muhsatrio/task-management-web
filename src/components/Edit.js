import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Edit = (props) => {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name Task" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tag</Form.Label>
                <Form.Control type="text" placeholder="Tag" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={props.handleClose}>
                Save Changes
              </Button>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Edit;