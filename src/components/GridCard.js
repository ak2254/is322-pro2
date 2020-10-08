import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Card from 'react-bootstrap/Card'
const renderButton = (taskId, column, btnText, callbackFn) => {
    if (btnText && callbackFn) {
        return (
            <div>
                <a href="#"
                   className="card-link"
                   onClick={onCardAction(taskId, column, callbackFn)}>
                    { btnText }
                </a>
            </div>
        );
    } else {
        return <span />;
    }
}

const onCardAction = (taskId, column, callbackFn) => {
    return () => {
        callbackFn(taskId, column);
    };
}



const GridCard = props => {

  return (
      <Card  style={{ marginBottom: '20px' }}>
          <Card.Body>
              <Card.Title>{ props.title }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> ID: {props.id }</Card.Subtitle>
              <Card.Text>
                  Type: {props.type }
              </Card.Text>
              { renderButton(props.id, props.column, props.prevTxt, props.onPrevClick) }
              { renderButton(props.id, props.column, props.nextTxt, props.onNextClick) }


          </Card.Body>
      </Card>

     );

};

export default GridCard;




