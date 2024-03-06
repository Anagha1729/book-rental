import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{backgroundColor:'white'}}>
      <h4 className='p-3'><p style={{textAlign:'center',color:'black'}}>Contact us anytime between 10:00 AM & 07:00 PM on all days!</p></h4>
      <div className='p' style={{width:'100%',height:'400px'}}>
        <Row className='p-4' style={{color:'#1f512b'}}>

          <Col md='3'>
            <h2>{''}Book Attic</h2>
            <p style={{textAlign:'justify'}}>Book Attic is an online books rental service. We have over 10 lakh books and 2 lakh happy customers.With our dedicated customer support team, you can rest easy knowing that we're doing everything we can to save you time, money and stress.
            </p>
          </Col>


  <Col md='3' pt='3'>
<div className='d-flex  flex-column'></div>
<h2>Contact</h2>
<address>
Book Private Limited
#633,19th mg Road, hariyal Layout, BSK 3rd Stage, Bangalore 562090
GSTTIN : 29AAKC77924H1ZG
mob:8798765434,
email:bookattic@gmail.com
</address>
 </Col>
         
          <Col md='3' className='d-flex justify-content-center'>
          <div  className='d-flex flex-column' >
            <h2>Link</h2>
            <Link to={'/'} style={{textDecoration:'none',color:'#1f512b'}}>Landing Page</Link>
            <Link to={'/Dashboard'}style={{textDecoration:'none',color:'#1f512b'}}>Dashboard</Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'#1f512b'}}>Login</Link>
            <Link to={'/register'} style={{textDecoration:'none',color:'#1f512b'}}>Register</Link>
            </div>
          </Col>
        
          <Col md='3' className='d-flex justify-content-center' >
            <div className='d-flex flex-column'>
            <h2>Guids</h2>
            <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'#1f512b'}}>React</Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'#1f512b'}}>React-bootstrap</Link>
            <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'#1f512b'}}>Fontawsome</Link>
            </div>
          </Col>
        </Row>
        <p className='text-center mt-3' style={{color:'#1f512b'}}>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p>
      </div>
  
    </div>
  )
    
}

export default Footer