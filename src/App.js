import React, { useState } from 'react';
import './App.css';
import { TaskList } from './containers';
import { Button } from 'react-bootstrap';
import { Input } from './components';

function App() {

  const [showInput, setShowInput] = useState(false);

  const handleCloseInput = () => setShowInput(false);
  const handleShowInput = () => setShowInput(true);

  return (
    <div className="App">
      <h1>My Todo Task</h1>
        <Button variant="success" onClick={handleShowInput}>Add My Task</Button>
        <div className="taskBox" style={{ margin: "30px 0" }}>
          <TaskList completed={false} />
          <TaskList completed={true} />
        </div>
        <Input show={showInput} handleShow={handleShowInput} handleClose={handleCloseInput} />
    </div>
  );
}

export default App;