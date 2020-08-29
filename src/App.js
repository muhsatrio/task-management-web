import React, { useState, useEffect } from 'react';
import './App.css';
import { TaskList } from './containers';
import { Button } from 'react-bootstrap';
import { Input } from './components';
import { initTask } from './store/action/task';
import { connect } from 'react-redux';
import axios from './db/axios';

function App(props) {

  const [showInput, setShowInput] = useState(false);
  const handleCloseInput = () => setShowInput(false);
  const handleShowInput = () => setShowInput(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tagBox, setTagBox] = useState("");
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    props.initTask();
  }, []);

  const handleAddTag = () => {
    if (tagBox.length>0) {
      const newTagList = [...tagList, { id: Math.random().toString(36).substr(2, 10), value: tagBox}];
      setTagList(newTagList);
      setTagBox("");
    }
    else {
      alert("Character should not empty");
    }
  }

  const handleDeleteTag = (id) => {
    const newListTag = tagList.filter(tag => tag.id!==id);
    setTagList(newListTag);
  }

  const handleSubmit = async () => {
    if (name.length>0 && description.length>0) {
      await axios.post('/efishery_task', {
        name,
        description,
        completed: false,
        tags: tagList,
        createdAt: new Date().toISOString().split('T')[0]
      });
      props.initTask();
      setTagList([]);
      setName("");
      setDescription("");
      setTagBox("")
      setShowInput(false);
    }
    else {
      alert('Name and Description should be filled!');
    }
  }

  return (
    <div className="App">
      <h1>My Todo Task</h1>
        <Button variant="success" onClick={handleShowInput}>Add My Task</Button>
        <div className="taskBox" style={{ margin: "30px 0" }}>
          <TaskList completed={false} />
          <TaskList completed={true} />
        </div>
        <Input show={showInput} 
          handleSubmit={handleSubmit} 
          handleShow={handleShowInput} 
          handleClose={handleCloseInput}
          handleAddTag={handleAddTag}
          handleDeleteTag={handleDeleteTag}
          data={{name, description, tagBox, tagList}}
          setData={{setName, setDescription, setTagBox, setTagList}}
        />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    initTask: () => dispatch(initTask())
  }
}

export default connect(null, mapDispatchToProps)(App);