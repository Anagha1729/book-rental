import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

function Category() {
  return (
    
    <div className='text-center'>
        <Header/>
        <h2>Book Category</h2>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Book Name</Card.Title>
        
        <Card.Text>
         <h6>Author</h6>
         <h6>language</h6>
         <h6>price</h6>
        </Card.Text>
        <Button variant="primary">Rent</Button>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    
    </div>
   
  )
}

export default Category