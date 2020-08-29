import React, {useState, useEffect} from 'react';
import { Task, Edit } from '../components';
import axios from '../db/axios';
import {initTask} from '../store/action/task';
import {connect} from 'react-redux';

const TaskContainer = (props) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tagBox, setTagBox] = useState("");
    const [tagList, setTagList] = useState([]);

    // console.log(props.data);

    useEffect(() => {
        setName(props.data.name);
        setDescription(props.data.description);
        setTagList(props.data.tags);
    }, []);

    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => {
        setTagBox("");
        setTagList(props.data.tags);
        setShowEdit(false);
    };
    const handleShowEdit = () => setShowEdit(true);

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

    const handleDelete = async (id, rev) => {
        const confirmation = window.confirm("Are you sure to delete this data?");
        if (confirmation === true) {
            await axios.delete(`/efishery_task/${id}?rev=${rev}`);
            props.initTask();
        }
    }

    const handleEdit = async (id, rev, data) => {
        const confirmation = window.confirm("Are you sure to change this task?");
        if (confirmation === true) {
            axios.put(`/efishery_task/${id}?rev=${rev}`, {
                ...props.data,
                ...data
            }).then(response => {
                console.log(response);
                props.initTask();
            })
            .catch(error => {
                alert('Edit data failed');
                console.log(error);
            });
            setShowEdit(false);
        }
    }

    return (
        <div>
            <Task data={props.data} completed={props.completed} handleShow={handleShowEdit} handleDelete={handleDelete} handleEdit={handleEdit} />
            <Edit 
                id={props.data.id}
                rev={props.data.value.rev}
                data={{name, description, tagBox, tagList}} 
                show={showEdit}
                setData={{setName, setDescription, setTagBox, setTagList}} 
                handleShow={handleShowEdit} 
                handleClose={handleCloseEdit} 
                handleEdit={handleEdit}
                handleAddTag={handleAddTag}
                handleDeleteTag={handleDeleteTag} />
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
      initTask: () => dispatch(initTask())
    }
}

export default connect(null, mapDispatchToProps)(TaskContainer);