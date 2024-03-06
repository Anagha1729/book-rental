import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from '../Component/Header';
import { toast } from 'react-toastify';
import { addBookApi } from '../Services/Allapi';
import { Link } from 'react-router-dom';

function Manage() {

  const [token, setToken] = useState("")
  const [preview, setPreview] = useState("")
  const [bookDetails, setBookDetails] = useState({
    title: "", book_image: "", author: "", genre: "", description: "", language: "", price: ""
  })
const [upload,setUpload]=useState(false)

  useEffect(() => {
    setToken(localStorage.getItem("token"))
    console.log(token);
  }, [token])
  console.log(bookDetails)

  useEffect(() => {
    if (bookDetails.book_image) {
      setPreview(URL.createObjectURL(bookDetails.book_image))
    }
  }, [bookDetails.book_image])
  console.log(preview)

  const handleAddBook = async () => {
    const { title, book_image, author, genre, description, language, price } = bookDetails
    if (!title || !book_image || !author || !genre || !description || !language || !price) {
      toast.warning("Enter Valid Details")
    }
    else {
      const bookData = new FormData()
      bookData.append("title", title)
      bookData.append("book_image", book_image)
      bookData.append("author", author)
      bookData.append("genre", genre)
      bookData.append("description", description)
      bookData.append("language", language)
      bookData.append("price",price)
      console.log(bookData, "bookdata")
      const reqHeader = {
        "Content-Type": "multipart/form-data", "Authorization": `bearer ${token}`
      }
      console.log(reqHeader)
      const result = await addBookApi(bookData, reqHeader)
      console.log(result, "res")
      if (result.status === 200) {
        toast.success('Book   Added')
        setUpload(true)
      }
      else {
        toast.error("error")
        setUpload(false)
      }

    }
  }
  return (

    <div>
      <Header />
      <div className='p-5'>
        <h2 className='text-center'>Upload A Book</h2>


        {/* <Form> */}

        <Row className="mb-3">

          <label htmlFor='book' className='text-center '>
            <input type='file' id='book' style={{ display: 'none' }} onChange={(e) => { setBookDetails({ ...bookDetails, book_image: e.target.files[0] }) }} />
            <img src={preview ? preview : "https://www.pngall.com/wp-content/uploads/2/Upload-PNG-Pic.png"} height={200} width={200} />

          </label>
          <Form.Group as={Col} controlId="formGridBookTitle">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" placeholder="Book Name" onChange={(e) => { setBookDetails({ ...bookDetails, title: e.target.value }) }} />
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridImage">
          <Form.Label>Book Image URL</Form.Label>
          <Form.Control type="image" placeholder="Book Image" />
        </Form.Group> */}

          <Form.Group as={Col} controlId="formGridAuthor">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" placeholder="Author Name" onChange={(e) => { setBookDetails({ ...bookDetails, author: e.target.value }) }} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridGenre">
            <Form.Label>Genre</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => { setBookDetails({ ...bookDetails, genre: e.target.value }) }}>
              <option value={""}>Choose..</option>
              <option value={"Novels"}>Novels</option>
              <option value={"AutoBiography"}>AutoBiography</option>
              <option value={"World Classics"}>World Classics</option>
              <option value={"Fiction"}>Fiction</option>

            </Form.Select>
          </Form.Group>

        </Row>


        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDescription">
            <Form.Label>Book Description</Form.Label>
            <Form.Control type="text" placeholder="Book Description" onChange={(e) => { setBookDetails({ ...bookDetails, description: e.target.value }) }} />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Language</Form.Label>
            <Form.Select defaultValue="Choose..." onChange={(e) => { setBookDetails({ ...bookDetails, language: e.target.value }) }}>
              <option value={""}>Choose...</option>
              <option value={"English"}>English</option>
              <option value={"Malayalam"}>Malayalam</option>
              <option value={"Arabic"}>Arabic</option>
              <option value={"Spanish"}>Spanish</option>
              <option value={"Hindi"}>Hindi</option>
            </Form.Select >
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" placeholder="Price" onChange={(e) => { setBookDetails({ ...bookDetails, price: e.target.value }) }} />
          </Form.Group>


        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button className='mx-4' variant="primary" type="" onClick={handleAddBook}>
          Upload
        </Button>
        {
          upload?
           <Link to={'/view'}><Button variant="primary" type="">
           View Books
         </Button></Link> 
          :""
        }
      
        {/* </Form> */}
      </div>
    </div>
  )
}


export default Manage