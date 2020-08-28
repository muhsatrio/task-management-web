import React, { useState, useEffect } from 'react';
import './App.css';
import { TaskList } from './containers';
import { Button } from 'react-bootstrap';
import { Input } from './components';
import { initTask } from './store/action/task';
import { connect } from 'react-redux';
import db from './db';

function App(props) {

  const [showInput, setShowInput] = useState(false);

  const handleCloseInput = () => setShowInput(false);
  const handleShowInput = () => setShowInput(true);

  useEffect(() => {
    props.initTask();
  }, []);

  const handleSubmit = async () => {
    await db.createNewDocument('efishery-task', {
      "name": "study",
      "description": "study online",
      "completed": false,
      "tags": ["math", "physics"],
      "createdAt": "2020-06-06"
    });
    props.initTask();
    setShowInput(false);
  }

  return (
    <div className="App">
      <h1>My Todo Task</h1>
        <Button variant="success" onClick={handleShowInput}>Add My Task</Button>
        <div className="taskBox" style={{ margin: "30px 0" }}>
          <TaskList completed={false} />
          <TaskList completed={true} />
        </div>
        <Input show={showInput} handleSubmit={handleSubmit} handleShow={handleShowInput} handleClose={handleCloseInput} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    initTask: () => dispatch(initTask())
  }
}

export default connect(null, mapDispatchToProps)(App);