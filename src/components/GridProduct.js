import React from 'react';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import CustumCard from './CustumCard';

function GridProduct() {
  const product = useSelector( (state => state.product));
  return (
    <Row xs={1} md={4} className="g-4">
      {product.map( item => (
        <CustumCard product ={item}/>
      ))}
    </Row>
  )
}

export default GridProduct