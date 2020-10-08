import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ListFilters from "./ListFilters";
import TaskItem from './TaskItem';

import Table from "react-bootstrap/Table";





class ListView extends React.Component{
    state = {
        sort: 'title',
        status: '',
        type: ''
    }

    onSortChange(sort) {
        this.setState({ sort });
    }

    onStatusChange(status) {
        this.setState({ status });
    }

    onTypeChange(type) {
        this.setState({ type });
    }

    getFilteredTasks () {
        let { tasks } = this.props;
        let { status, type, sort } = this.state;

        if (!!status) {
            tasks = tasks.filter(task => {
                return task.column === status;
            });
        }

        if (!!type) {
            tasks = tasks.filter(task => {
                return task.type === type;
            });
        }

        tasks = tasks.sort((a, b) => {
            let nameA = a[sort].toUpperCase();
            let nameB = b[sort].toUpperCase();

            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
        })

        return tasks;
    }


    render() {


            const filteredTasks = this.getFilteredTasks();
            const listItems = filteredTasks.map(task => {
                return <TaskItem title={task.title}
                                 key={task.id}
                                 type={task.type}
                                 column={task.column}
                                 id={task.id}/>
            });






        return (

            <div>
                <ListFilters onSortChange={this.onSortChange.bind(this)}
                             onStatusChange={this.onStatusChange.bind(this)}
                             onTypeChange={this.onTypeChange.bind(this)} />

                <h1 style={{ textAlign: 'center', color:'#c00'}} > List View</h1>

                <Table striped bordered hover >

                    <thead>
                    <tr>
                        <td>Title</td>
                        <td>Status</td>
                        <td>Type</td>
                    </tr>
                    </thead>
                    {listItems}
                </Table>

            </div>
        );
    }
}

export default ListView;

