import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import GridCard from './GridCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'

const COLUMN_NAMES = ['todo', 'in-progress', 'review', 'done'];

class GridView extends React.Component {

  constructor(props) {
    super(props);

    this.onPrevClick = this.onPrevClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
  }


  findTask(taskId, columnName) {
    const columnTasks = (columnName === 'in-progress') ? this.props.tasks.inProgress : this.props.tasks[columnName];
    return columnTasks.find(task => task.id === taskId);
  }

  onPrevClick(taskId, columnName) {
    let task = this.findTask(taskId, columnName);
    let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);

    if (columnIndex > 0) {
      columnIndex--
      task.column = COLUMN_NAMES[columnIndex];
      this.props.onUpdateTask(task);
    }
  }

  onNextClick(taskId, columnName) {
    let task = this.findTask(taskId, columnName);
    let columnIndex = COLUMN_NAMES.findIndex(name => task.column === name);

    if (columnIndex < COLUMN_NAMES.length) {
      columnIndex++
      task.column = COLUMN_NAMES[columnIndex];
      this.props.onUpdateTask(task);
    }
  }








 renderCardColumn(post,prevTxt, nextTxt) {
    return (

   <GridCard id={post.id}
             key={post.id}
             title={post.title}
             type={post.type}
             column={post.column}
             prevTxt={prevTxt}
             onPrevClick={this.onPrevClick}
             nextTxt={nextTxt}
             onNextClick={this.onNextClick}/>
 );
  }

  render() {

    const todoCards = this.props.tasks.todo
        .map(post => this.renderCardColumn(post, null, 'Start Work >'));
    const inProgressCards = this.props.tasks.inProgress
        .map(post => this.renderCardColumn(post, '< Send Back', 'Request Review >'));
    const reviewCards = this.props.tasks.review
        .map(post => this.renderCardColumn(post, '< More Work Required', 'Mark Done >'));
    const doneCards = this.props.tasks.done
        .map(post => this.renderCardColumn(post, '< Request Re-Review'));


    return(

    <Container style={{display: 'flex', flexDirection: 'row'}}>
      <Row  style={{  width: '100%',
        padding: '15px',
        border: '2px solid white',
        color: 'black'}} >
        <h3> To do</h3>
         { todoCards}
      </Row >
      <Row style={{  width: '100%',
        padding: '15px',
        border: '2px solid white',
        background: 'linear-gradient(292deg,#e00e1f,#dd152d 47%,#750d42)',
        color: 'black'}}>
        <h3>In Progress</h3>
        { inProgressCards}
      </Row >
      <Row style={{  width: '100%',
        padding: '15px',
        border: '2px solid white',
        color: 'black'}}>
        <h3 > Review</h3>
        { reviewCards}
      </Row>
      <Row style={{  width: '100%',
        background: 'linear-gradient(292deg,#e00e1f,#dd152d 47%,#750d42)',
        padding: '15px',
        border: '2px solid white',
        color: 'black'}}>
        <h3>Done</h3>
        { doneCards}
      </Row>
    </Container>
    );


  }

}

export default GridView;


