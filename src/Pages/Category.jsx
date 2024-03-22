import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { BASE_URL } from '../Services/baseurl';
import Rent from '../Component/Rent';
import { getViewListApi } from '../Services/Allapi';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { addcartApi } from '../Services/Allapi';
import { toast } from 'react-toastify';
import { cartViewContext } from '../Context/ContextShare';
import { message } from 'antd';

function Category({ book_Id }) {
  const [viewList, setViewList] = useState("")
  const[cart,setCart]=useState({
    userId:"",title: "", book_image: "", author: "", genre: "", status: "", language: "", price: ""
  })
  const{cartResponse,setCartResponse}=useContext(cartViewContext)

  const[cartuserid,setCartuserid]=useState("")
  useEffect(() => {
    handleViewList()
    setCartuserid(JSON.parse(localStorage.getItem("currentUser"))._id)
  }, [localStorage.getItem("token")])
  console.log(viewList);
console.log(cartuserid)
  useEffect(()=>{
    setCart({...cart,userId:cartuserid})
  },[cartuserid])

  const handleViewList = async () => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader)
    const res = await getViewListApi(reqHeader)
    if (res.status === 200) {
      setViewList(res.data)
    }

    console.log(book_Id);
  }

   const handleCart =async (item) => {
    const { userId,title, book_image, author, genre, status, language, price } = cart
    setCart({...cart,title:item.title,book_image:item.book_image,author:item.author,genre:item.genre,status:item.genre,language:item.genre,price:item.price})
    console.log(cart,"cartt")
    if (!userId||!title || !book_image || !author || !genre || !status || !language || !price) {
      message.warning("Enter Valid Details")
    }
    else {
      const cartData = new FormData()
      cartData.append("userId", userId)
      cartData.append("title", title)
      cartData.append("book_image", book_image)
      cartData.append("author", author)
      cartData.append("genre", genre)
      cartData.append("status", status)
      cartData.append("language", language)
      cartData.append("price",price)
      console.log(cartData, "cartdata")
      const reqHeader = {
        "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
      }
      const result =await addcartApi(cartData, reqHeader)
      if (result.status === 200) {
        message.success('Added to Cart')
        setCartResponse(result.data)
      }
      else {
        message.error("error")
        
      }

       
    }
  }
  return (

    <div className='text-center'>
      <Header />
      <h2>Book Category</h2>
      <Row>

        {
          viewList ?
            viewList.filter(item => item.genre === book_Id.genre).map(item => (
              <Col md='4' className='d-flex justify-content-center my-3'>

                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src={`${BASE_URL}/upload/${item.book_image}`} height={200} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>

                    <Card.Text>
                      <h6>{item.Author}</h6>
                      <h6>{item.language}</h6>
                      <h6>{item.price} ₹</h6>
                      <h6>{item.status}</h6>
                    </Card.Text>
                    <Rent item ={item} />
                    <Button variant="outline-primary" className='mt-2' onClick={() => handleCart(item)}>Add to Cart</Button>
                  </Card.Body >

                </Card>
              </Col>
            )) : ""

        }

      </Row>



    </div>

  )
}

export default Category