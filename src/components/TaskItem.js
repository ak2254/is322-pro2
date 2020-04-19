import React from 'react';

const TaskItem = props => {
    return (


            <tbody>
            <tr>
                <td>{props.title}</td>
                <td>{props.column}</td>
                <td>{props.type}</td>
            </tr>
            </tbody>


    );


};
export default TaskItem;




