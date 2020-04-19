import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


import GridCard from './GridCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Container'
class GridView extends React.Component {



  renderCard(post)
  {
    return (
        <GridCard id={post.id}  key={post.id}  title={post.title} type={post.type} column={post.column} />
    );
  }






  static renderCardColumn(post) {
    return (
        <GridCard id={post.id} title={post.title} type={post.type}/>
    );
  }

  render() {
    const todoCards = this.props.tasks.todo.map(post => this.renderCard(post));
    const inProgressCards = this.props.tasks.inProgress.map(post => this.renderCard(post));
    const reviewCards = this.props.tasks.review.map(post => this.renderCard(post));
    const doneCards = this.props.tasks.done.map(post => this.renderCard(post));


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


