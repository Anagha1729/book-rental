import React, { useEffect, useState, useContext } from 'react'
import Header from '../Component/Header'
import { deleteCartApi, getcartviewApi } from '../Services/Allapi'
import { Button } from 'react-bootstrap'
import Rent from '../Component/Rent'
import { toast } from 'react-toastify'
import { BASE_URL } from '../Services/baseurl'
import { cartViewContext } from '../Context/ContextShare'
import { message } from 'antd'


function Cart() {
  const [cartView, setCartView] = useState("")
  const [user, setUser] = useState("")
  const { cartResponse, setCartResponse } = useContext(cartViewContext)
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser"))._id)
    handleViewCart()
  }, [localStorage.getItem("token")])
  console.log(cartView);

  const handleViewCart = async () => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader)
    const res = await getcartviewApi(reqHeader)
    if (res.status === 200) {
      setCartView(res.data)
    }
  }

  const handleDeleteList = async (item) => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader);
    // console.log(item._id);
    const res = await deleteCartApi(reqHeader, item._id)
    console.log(res);
    if (res.status === 200) {
      message.success(" Book deleted")
      setCartResponse(res.data)
      handleViewCart()
    }
    else {
      message.error("Failed")
    }

  }



  return (
    <div>
      <Header />

      <h1 className='text-center my-4'>Library bag</h1>
      <div className='d-grid justify-content-center'>
        {
          cartView ?
            cartView.filter(item => item.userId === user).map(item => (
              <div style={{ width: '300px', height: '100%' }} className='my-3'>
                <div style={{ backgroundColor: '#808080' }} className='p-3'>
                  <h3 className='text-center'>{item.title}</h3>
                  <div className='d-flex justify-content-center'>
                  <img src={`${BASE_URL}/upload/${item.book_image}`} alt="" width={80} height={80} />
                  </div>
                  <h4 className='text-center'>₹ {item.price}</h4>
                  <div className='d-flex justify-content-evenly'>
                    <Button onClick={() => handleDeleteList(item)} >Remove</Button>
                    <Rent item={item} />
                  </div>
                </div>
              </div>



            )) : ""
        }
      </div>



    </div>

  )
}

export default Cart