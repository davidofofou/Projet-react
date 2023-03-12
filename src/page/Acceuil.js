import React, { useState } from 'react'
import GridProduct from '../components/GridProduct';
import { Form, Button } from 'react-bootstrap';

function Acceuil() {
  const [search, setSearch] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <section className='bgimage'>
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-lg-12 col-md-12 col-xs-12 hero-text'>
            <h2 className='slide-titre'>Hi Welcome Here</h2>
            <p className='slide-desc'>
              <h3>See yours Good article Here!!</h3>
                <input type ="text" placeholder="Enter Search Term " required={true} value={search} onChange={e => setSearch(e.target.value)} className="search"/> <br/>
                <Button type='submit' onClick={handleSubmit} className="btn btn-success">Search</Button>
            </p>           
          </div>
          </div>
        </div>

      </section>
      <h3 className='titre'> Nos différents  vêtements </h3>
      <div className='body'>
        <GridProduct/>
      </div>
    </div>
  )
}

export default Acceuil