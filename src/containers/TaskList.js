import React from 'react';
import { Row } from 'react-bootstrap';
import Task from './Task';
import { Spinner } from '../components';
import { connect } from 'react-redux';

const TaskList = (props) => {

    let page = <Spinner />

    if (props.tasks) {
        page = (
            <div className="TaskList" style={{ margin: "0 50px" }}>
                {props.completed === true ? <h4>Completed</h4> : <h4>On Progress</h4>}
                { props.tasks.filter(task => task.completed === props.completed).map(eachTask => (
                    <Row style={{ margin: "30px 0" }}>
                        <Task data={eachTask} completed={props.completed} />
                    </Row>
                ) ) }
            </div>
        )
    }

    return page;
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TaskList);