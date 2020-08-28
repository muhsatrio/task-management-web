import React, {useState} from 'react';
import { Task, Edit } from '../components';

const TaskContainer = (props) => {

    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    return (
        <div>
            <Task completed={props.completed} handleShow={handleShowEdit} />
            <Edit show={showEdit} handleShow={handleShowEdit} handleClose={handleCloseEdit} />
        </div>
    );
}

export default TaskContainer;