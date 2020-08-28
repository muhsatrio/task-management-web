import React from 'react';
import { Row } from 'react-bootstrap';
import Task from './Task';

const TaskList = (props) => {
    return (
        <div className="TaskList" style={{ margin: "0 50px" }}>
            {props.completed === true ? <h4>Completed</h4> : <h4>On Progress</h4>}
            <Row style={{ margin: "30px 0" }}>
                <Task completed={props.completed} />
            </Row>
            <Row style={{ margin: "30px 0" }}>
                <Task completed={props.completed} />
            </Row>
            <Row style={{ margin: "30px 0" }}>
                <Task completed={props.completed} />
            </Row>
            <Row style={{ margin: "30px 0" }}>
                <Task completed={props.completed} />
            </Row>
        </div>
    );
}

export default TaskList;