import React from 'react'
import{Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='' style={{backgroundColor:'#b8b8b369'}}>
       <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand>
          <Link to={'/'}style={{textDecoration:'none',}}>
                     <h4 style={{color:'black'}}>Book Attic </h4>
                     </Link>
            

          </Navbar.Brand>

          </Container>
      </Navbar>
    </div>
  )
}

export default Header