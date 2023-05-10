import React from 'react';
import pull from '../asset/images/pull.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

export default function CustumCard(props) {
  return (
    <Col>
          <Card style={
            { 
            width: '20rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height: '32rem'
            }
          }>
            <Card.Img variant="top" src={pull} />
            <Card.Body>
              <Card.Title style={{
                textAlign: 'center',
                fontFamily: 'Time New Roman, Helvetica'
              }}>
                <b>{props.product.name}</b>
              </Card.Title>
              <Card.Text className='text-wrapper'>
                {props.product.description }
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text style={{
                textAlign: 'center',
              }}>
                <div>
                  <button className='btn btn-info'>Voir..</button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
    </Col>
  )
}

