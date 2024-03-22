import React, { useState } from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import designerImg from '../Asset/lib.jpg'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


function Landing() {
  const [isLogged, setIsLogged] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("Currentuser")) {
      setIsLogged(true)
    }
    else {
      setIsLogged(false)
    }

  }, [])
  return (
    <>
      <div className='container-fluid rounded' style={{ width: '100%', height: '100vh', backgroundColor: '' }}>
        <div className='d-flex float-end p-3'>
          <Link to={'/register'}><Button className='me-3 border-0' style={{ backgroundColor: "" }}>Sign Up</Button></Link>
          <Link to={'/login'}> <Button className='border-0' style={{ backgroundColor: "" }}>Login</Button></Link>
        </div>
        <Row className='align-items-center p-5 h-100'>
          <Col sm={12} md={6}>
            <h1 style={{ fontSize: '80px', color: 'beige' }} className='text-secondary'>
              <img src=''></img>
              Book Attic</h1>
            <p className='mt-3 ' style={{ textAlign: 'justify', marginBottom: '80px' }}> Start Read With Book Attic!!
              Book Attic is a remarkable resource for book enthusiasts. It’s like a digital heaven where you can explore, borrow, and discover books for free.
            </p>


            {
              isLogged ?
                <Link to={'/Dashboard'} className='btn btn-primary btn-outline'>Learn About Us</Link>
                :
                <Link to={'/login'} className='btn btn-primary'>Start to Explore</Link>
            }


          </Col>
          <Col ms={12} md={6}>
            <img src={designerImg} className='img-fluid' alt="" />
          </Col>
        </Row>

      </div>
      <div className='my-5'>
        <h1 style={{ textAlign: 'center' }}>Best Seller Books</h1>




        <Row  className='mt-4'>
          <Col md='3' className='d-flex justify-content-center'>
            <Card style={{ width: '18rem', height: '35rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.CgKKdKke6PpFIkyF5_64bwHaLS?w=131&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='' />
              <Card.Body>
                <Card.Title>HARRY POTTER</Card.Title>
                <Card.Text>
                  BY J.K.ROWLING
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='3'className='d-flex justify-content-center'>
            <Card style={{ width: '18rem', height: '35rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.rKY-WsdQ7_EwqBCci-oz8QHaLL?rs=1&pid=ImgDetMain" alt='' />
              <Card.Body>
                <Card.Title>The Alchemist</Card.Title>
                <Card.Text>
                  BY PAULO COELHO
                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col md='3'className='d-flex justify-content-center' >
            <Card style={{ width: '18rem', height: '35rem' }}>
              <Card.Img variant="top" src="https://theinfomate.com/wp-content/uploads/2021/06/a5-768x1163.jpg" alt='' />
              <Card.Body>
                <Card.Title>AADUJEEVITHAM</Card.Title>
                <Card.Text>
                  BY BENNIYAMIN
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md='3' className='d-flex justify-content-center'>
            <Card style={{ width: '18rem', height: '35rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.5KJGDF31Av2fvxVKUFTsLQAAAA?w=117&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt='' />
              <Card.Body>
                <Card.Title>TWO STATES</Card.Title>
                <Card.Text>
                  BY CHETAN BHAGAT
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div>
          <Link to={'/register'} className=' d-flex justify-content-center' >See More</Link>
        </div>
      </div>

    </>
  )
}

export default Landing