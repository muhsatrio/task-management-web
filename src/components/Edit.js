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
                <Form.Control type="text" placeholder="Name Task" value={props.data.name} onChange={e => props.setData.setName(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" value={props.data.description} onChange={e => props.setData.setDescription(e.target.value)} />
              </Form.Group>
              <Form.Group>
                <Form.Label>Tag</Form.Label>
                <Form.Control type="text" placeholder="Tag" value={props.data.tagBox} onChange={e => props.setData.setTagBox(e.target.value)} onKeyPress={e => (e.key === 'Enter' ? props.handleAddTag() : null )}  />
              </Form.Group>
              <Form.Group>
                {props.data.tagList.map((eachTag, i) => ( <Button style={{ marginRight: "3px" }} onClick={() => props.handleDeleteTag(eachTag.id)} key={i} variant="primary">{eachTag.value}</Button> ))}
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => props.handleEdit(props.id, props.rev, {name: props.data.name, description: props.data.description, tags: props.data.tagList})}>
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