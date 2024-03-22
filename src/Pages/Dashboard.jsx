import React from 'react'
import Header from '../Component/Header'
import { Row,Col,Card,Button} from 'react-bootstrap'
import Genre from '../Asset/Cat.jpg'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <Header/>
      <div className='p-4'>
        <h3 style={{textAlign:'center'}} className='my-4'>Genres</h3>
        <Row>
        <Col md='3'>
       <Link to={'/admin/category/Novels'}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Genre}/>
      <Card.Body>
        <Card.Title className='text-center' style={{textDecoration:'none'}}>Novels</Card.Title>
        
      </Card.Body>
      </Card>
      </Link>
          </Col>
          <Col md='3'>
       <Link to={'/admin/category/AutoBiography'} > <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Genre} />
      <Card.Body>
        <Card.Title className='text-center' style={{textDecoration:'none'}}>Auto Biography</Card.Title>
        
      </Card.Body>
      </Card>
      </Link>
          </Col>
          <Col md='3'>
       <Link to={'/admin/category/World Classics'}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Genre} />
      <Card.Body>
        <Card.Title className='text-center' style={{textDecoration:'none'}}>World Classics</Card.Title>
        
      </Card.Body>
      </Card>
      </Link>
          </Col>
          <Col md='3'>
       <Link to={'/admin/category/Fiction'}> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Genre} />
      <Card.Body>
        <Card.Title className='text-center' style={{textDecoration:'none'}}>Fiction</Card.Title>
        
      </Card.Body>
      </Card>
      </Link>
          </Col>
        </Row>
      </div>
      <div>
        <h3 className='text-center p-4'>Testimonials</h3>
       
        <marquee>
        <Row>
          <Col md='4'>
        <Card style={{ width: '26rem' }}>
      <Card.Body>
        <Card.Title className='text-center'>Anand.P.T</Card.Title>
        <Card.Text>
          Book Attic is a perfect website for readers like me. 
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

<Col md='4'>
    <Card style={{ width: '26rem' }}>
      <Card.Body>
        <Card.Title className='text-center'>Nikhila john</Card.Title>
        <Card.Text>
          The best rental book service in india.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md='4'>
    <Card style={{ width: '26rem' }}>
      <Card.Body>
        <Card.Title className='text-center'>devika nambiar</Card.Title>
        <Card.Text>
          Very convinient to use.plenty of books available.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

</Row>
        </marquee>
      
      </div>
      
    </div>
   
  )
}

export default Dashboard