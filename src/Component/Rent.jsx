import { useState, useEffect } from 'react'
import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { addpaymentApi } from '../Services/Allapi';
import { message } from 'antd';

function Rent({ item }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  let givenDate={
    toDate : new Date(),
    wantedDate: 14
  }
  let date=new Date(new Date(givenDate.toDate).setDate(givenDate.toDate.getDate()+givenDate.wantedDate)).toDateString()
  console.log(date);

  const [paymentDetails, setPaymentDetails] = useState({
    Address: "", contact: "", rentaldate: "", duedate: "", cardnumber: "", cvv: "", otp: "", title: item.title, reader: JSON.parse(localStorage.getItem("currentUser")).username
  })

  useEffect(()=>{
        setPaymentDetails({...paymentDetails,rentaldate:new Date().toDateString().slice(0, 15),duedate:date})
  },[])

  const handleAddPayment = async () => {
    const { Address, contact, rentaldate, duedate, cardnumber, cvv, otp, title, reader } = paymentDetails
    if (!Address || !contact || !rentaldate || !duedate || !cardnumber || !cvv || !otp || !title || !reader) {
      message.warning("Enter Valid Details")
    }
    else {
      const paymentData = new FormData()
      paymentData.append("Address", Address)
      paymentData.append("contact", contact)
      paymentData.append("rentaldate", rentaldate)
      paymentData.append("duedate", duedate)
      paymentData.append("cardnumber", cardnumber)
      paymentData.append("cvv", cvv)
      paymentData.append("otp", otp)
      paymentData.append("title", title)
      paymentData.append("reader", reader)
      console.log(paymentData, "paymentdata")
      const reqHeader = {
        "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
      }
      console.log(reqHeader)
      const result = await addpaymentApi(paymentData, reqHeader)
      console.log(result, "res")
      if (result.status === 200) {
        message.success("Order Placed")
        handleClose()
      }
      else {
        message.error("error")
      }

    }
  }
  console.log(paymentDetails);
  return (
    <div>

      <Button variant="primary" onClick={handleShow}> Rent</Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment Method</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>

            <Row >
              <Col xs={6}>
                <label>ADDRESS
                  <textarea required className='w-100' onChange={(e) => { setPaymentDetails({ ...paymentDetails, Address: e.target.value }) }}></textarea>
                </label>
                <label>CONTACT NUMBER<input required className='w-100' onChange={(e) => { setPaymentDetails({ ...paymentDetails, contact: e.target.value }) }} /></label>
                <label>Rental Date<input type='text' required value={new Date().toDateString().slice(0, 15)}  /></label>
                <label>Due date <br /><input type='text' required value={date} /></label>
              </Col>

              <Col xs={6}>
                <label>CARD NUMBER <input required onChange={(e) => { setPaymentDetails({ ...paymentDetails, cardnumber: e.target.value }) }} /></label>

                <label>CVV<input required onChange={(e) => { setPaymentDetails({ ...paymentDetails, cvv: e.target.value }) }} /></label>
                <label>OTP<input required onChange={(e) => { setPaymentDetails({ ...paymentDetails, otp: e.target.value }) }} /></label>

              </Col>
            </Row>


          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Continue Shopping
          </Button>
          <Button variant="primary" onClick={handleAddPayment}>Pay ₹ {item.price}</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Rent