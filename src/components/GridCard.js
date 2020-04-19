import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import Card from 'react-bootstrap/Card'




const GridCard = props => {

  return (
      <Card  style={{ marginBottom: '20px' }}>
          <Card.Body>
              <Card.Title>{ props.title }</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"> ID: {props.id }</Card.Subtitle>
              <Card.Text>
                  Type: {props.type }
              </Card.Text>
              <button type="button"

                      className="btn btn-primary" style={{ float: 'left' }}>
                  next
              </button>
              <button type="button"
                      className="btn btn-primary" style={{ float: 'right' }} >
                  GoBack
              </button>

          </Card.Body>
      </Card>

     );

};

export default GridCard;




