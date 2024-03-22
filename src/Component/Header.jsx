import React,{useEffect,useState,useContext} from 'react'
import{Navbar,Container, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { getcartviewApi } from '../Services/Allapi'
import { cartViewContext } from '../Context/ContextShare'

function Header() {
  const navigate=useNavigate()
  const[cartView,setCartView]=useState("")
  const[user,setUser]=useState("")
  const[cartlength,setCartlength]=useState("")
  const{cartResponse,setCartResponse}=useContext(cartViewContext)
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser"))._id)
    handleViewCart()
  }, [localStorage.getItem("token"),cartResponse])
  console.log(cartView);
  useEffect(()=>{
    setCartlength(cartView && cartView.filter(item=>item.userId===user).length)
  },[cartView])

 const handleViewCart=async()=>{
  const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader)
    const res = await getcartviewApi(reqHeader)
    if (res.status === 200) {
      setCartView(res.data)
    }
 }
  const logout=()=>{
    localStorage.clear("currentUser")
    navigate("/login")
  }
  return (
    <div className='' style={{backgroundColor:'#b8b8b369'}}>
       <Navbar className="bg-body-tertiary">
        <Container>
        <Navbar.Brand>
          <Link to={'/'}style={{textDecoration:'none',}}>
                     <h4 style={{color:'black'}}>Book Attic </h4>
                     </Link>
            

          </Navbar.Brand>
  <div>
 <Link to={'/cart'} ><Button className='me-2'>Cart
<span class="badge bg-secondary">{cartlength}</span>
 
  </Button>  </Link>  
<Button onClick={logout}>Log Out</Button>
        
  </div>
  </Container>
      </Navbar>
      
    </div>
  )
}

export default Header