import React from 'react';
import pull from '../asset/images/pull.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function CustumCard(props) {
  return (
    <Col>
          <Card>
            <Card.Img variant="top" src={pull} />
            <Card.Body>
              <Card.Title>{props.product.name}</Card.Title>
              <Card.Text>
                {props.product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  )
}

