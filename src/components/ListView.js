import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import TaskItem from './TaskItem';

import Table from "react-bootstrap/Table";



class ListView extends React.Component{

    gettask(){
        let { tasks } = this.props;
        return tasks;
    }

    render() {
        const taskitems = this.gettask().map(task => {
            return <TaskItem title={task.title} key={task.id} type={task.type} column={task.column} id={task.id} />
        });

        return (

            <div>
                <h1 style={{ textAlign: 'center', color:'#c00'}} > List View</h1>

                <Table striped bordered hover >

                    <thead>
                    <tr>
                        <td>Title</td>
                        <td>Status</td>
                        <td>Type</td>
                    </tr>
                    </thead>
                    {taskitems}
                </Table>

            </div>
        );
    }
}

export default ListView;

