import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { Card, Button, Row, Col } from 'react-bootstrap'
import { deleteBookApi, getViewListApi } from '../Services/Allapi'
import { toast } from 'react-toastify'
import { BASE_URL } from '../Services/baseurl'
import { Link } from 'react-router-dom'
function AdminView() {

  const [viewList, setViewList] = useState("")
  useEffect(() => {
    handleViewList()
  }, [localStorage.getItem("token")])
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
      toast.success(" Book deleted")
      handleViewList()
    }
    else {
      toast.error("Failed")
    }

  }




  return (
    <div className='text-center'>
      <Header />
      <h2>Manage Your Books</h2>
      <Link to={'/manage'}><Button>Add Books</Button></Link>

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
                    <h6>{item.price}</h6> 
                    {/* <Button variant="primary">Update</Button> */}
                    <Button variant="primary" onClick={()=>handleDeleteList(item)}>Delete</Button>
                    <Button variant="primary">Edit</Button>
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