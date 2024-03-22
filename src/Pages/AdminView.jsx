import React, { useEffect, useState,useContext } from 'react'
import Header from '../Component/Header'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { deleteBookApi, getViewListApi,updateBookApi } from '../Services/Allapi'
import { toast } from 'react-toastify'
import { BASE_URL } from '../Services/baseurl'
import { Link } from 'react-router-dom'
import Edit from '../Pages/Edit'
import { editBookResponseContext } from '../Context/ContextShare'
import { message } from 'antd'
function AdminView() {

  
  const [viewList, setViewList] = useState("")
  const{editBookResponse,setEditBookResponse}=useContext(editBookResponseContext)
 useEffect(() => {
    handleViewList()
  }, [localStorage.getItem("token"),editBookResponse])
  console.log(viewList);

  const handleViewList = async () => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader)
    const res = await getViewListApi(reqHeader)
    if (res.status === 200) {
      setViewList(res.data)
    }
  }
  

  const handleDeleteList = async (item) => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader);
    // console.log(item._id);
    const res = await deleteBookApi( reqHeader,item._id)
    console.log(res);
    if (res.status === 200) {
      message.success(" Book deleted")
      handleViewList()
    }
    else {
      message.error("Failed")
    }

  }

  


 

  return (
    <div className='text-center'>
      <Header />
      <h2>Manage Your Books</h2>
      <Link to={'/manage'} className='m-3'><Button>Add Books</Button></Link>
      <Link to={'/view'} className='m-3'><Button>Rental Summery</Button></Link>

      <Row className=''>
        {
          viewList ?
            viewList.map(item => (
              <Col md="4" className='d-flex justify-content-center my-3'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`${BASE_URL}/upload/${item.book_image}`} style={{height:'200px'}} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <h6>{item.genre}</h6>
                    <h6>{item.author}</h6>
                    <h6>{item.language}</h6>    
                    <h6>{item.price} Rs</h6> 
                    <h6>{item.status}</h6>
                    {/* <Button variant="primary">Update</Button> */}
                    <Button variant="outline-primary " onClick={()=>handleDeleteList(item)}>Delete</Button>
                   <Edit book={item}/>
                  </Card.Body>
                </Card>
              </Col>
            )):""
      }
      </Row>

    </div>
  )
}

export default AdminView