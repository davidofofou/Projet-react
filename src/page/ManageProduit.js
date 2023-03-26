import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { addProduct, deleteProduct, toggleProduct } from '../store';
import Table from 'react-bootstrap/Table';

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

function ManageProduit() {
    const product = useSelector( (state => state.product));
    const dispatch = useDispatch();

    const [users, setUsers] = useState(product);

    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowEdit = () => setShowEdit(true);
    const handleShowDelete = () => setShowDelete(true);

  const renderUsers = () => {
    return product.map(({ id, name, prix }) => {
      return <tr key={id} >
      <td style={{ padding: '10px' }}>{id}</td>
      <td style={{ padding: '10px' }}>{name}</td>
      <td style={{ padding: '10px' }}>{prix}</td>
      <td style={{ padding: '10px' }}><Button onClick={handleShowEdit}>Edit</Button></td>
      <td style={{ padding: '10px' }}><Button variant='danger' onClick={handleShowDelete}>Delete</Button></td>
    </tr>
    })
  }
  const editProduct = (id) => {
    const updateproduct = {
      id: id,
      name : name,
      price: price
    }
    dispatch(toggleProduct(updateproduct));
  }

  const delProduct = (id) => {
    dispatch(deleteProduct(id));
  }

  const renderHeader = () => {
    return <tr>
      {Object.keys(product[0]).map(key => <th>{capitalize(key)}</th>)}
    </tr>
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!name || !price ) return;
    const itemId = users.length + 1 ;
    const newproduct = {
        id: itemId,
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
        
        <Modal show={showEdit} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="hidden" />
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
            <Button variant="primary" onClick={editProduct()}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
        <div style={{ marginLeft: '10%', marginBottom: '20px', marginRight: '10%' }}>
            <h1> Table of Articles</h1>
            <Table striped>
                <thead>
                  {renderHeader()}
                </thead>
                <tbody>
                  {renderUsers()}
                </tbody>
              </Table>
        </div>
    </>
  )
}

export default ManageProduit