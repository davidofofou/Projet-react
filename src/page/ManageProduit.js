import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { addProduct } from '../store';

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

function ManageProduit() {
    const product = useSelector( (state => state.product));
    const dispatch = useDispatch();

    const [users, setUsers] = useState(product);

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const renderUsers = () => {
    return product.map(({ id, name, prix }) => {
      return <tr key={id} >
      <td style={{ padding: '10px', border: '1px solid black' }}>{id}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{name}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}>{prix}</td>
      <td style={{ padding: '10px', border: '1px solid black' }}><Button>Edit</Button></td>
      <td style={{ padding: '10px', border: '1px solid black' }}><Button variant='danger'>Delete</Button></td>
    </tr>
    })
  }

  const renderHeader = () => {
    return <tr>
      {Object.keys(product[0]).map(key => <th>{capitalize(key)}</th>)}
    </tr>
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!name || !price ) return;
    const newproduct = {
        id: product.lenth,
        name : name,
        price: price
    }
   dispatch(addProduct(newproduct));
    setName("");
    setPrice("");
    setShow(false);
  };

  return (
    <>
        <Button variant='primary' className='buttonAdd' onClick={handleShow} > Ajouter </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>ADD Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="bold">Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name of your product" required={true} value={name} onChange={e => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="bold">Price</Form.Label>
                        <Form.Control type="text" placeholder="Enter the price" required={true} value={price} onChange={e => setPrice(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        <div style={{ marginLeft: '40%', marginBottom: '20px' }}>
            <h1> Table of Articles</h1>
            <table>
                {renderHeader()}
                <tbody>
                {renderUsers()}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default ManageProduit