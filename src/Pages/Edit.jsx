import React,{useState,useEffect,useContext} from 'react'
import { Button,Modal,Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { updateBookApi } from '../Services/Allapi'
import { editBookResponseContext } from '../Context/ContextShare'
import { message } from 'antd'


function Edit({book}) {
    const[update,setUpdate]=useState({
        title:book.title ,book_image:book.book_image,author:book.author,genre:book.genre,status:book.status,language:book.language,price:book.price
      })
      const{editBookResponse,setEditBookResponse}=useContext(editBookResponseContext)
      const [show, setShow] = useState(false);
       const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const[token,setToken]=useState("")
      useEffect(()=>{
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"))
        }
      },[])
     
      
    
console.log(update)

      const handleUpdateList=async(id)=>{
        const{title, book_image, author, genre, status, language, price}=update
        if(!title || !book_image || !author ||!genre ||!status||!language||!price){
          message.warning("Enter Valid data")
        }
    
        else{
          const reqBody= new FormData()
          reqBody.append('title',title)
          reqBody.append('book_image',book_image)
          reqBody.append('author',author)
          reqBody.append('genre',genre)
          reqBody.append('status',status)
          reqBody.append('language',language)
          reqBody.append('price',price)
          console.log(reqBody)
          const reqHeader={
            "Content-Type":"application/json","Authorization":`Bearer ${token}`
            }
            console.log(reqHeader);
            const res=await updateBookApi(reqHeader,reqBody,id)
            if(res.status==200){
              setEditBookResponse(res.data)
              message.success("Book Updated Successfully!!")
              handleClose()
              
            }
          
          else{
            message.error(res.response.data)
          }
        }
      
    
      
      }

  return (
    <div>
         <Button variant="primary" onClick={handleShow}>Edit</Button>
         <Modal show={show} onHide={handleClose} backdrop="static"
        keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Edit {book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
           <label>Book Price</label>  
           <Form.Control type="number" placeholder="Price" defaultValue={book.price} onChange={(e) => { setUpdate({ ...update, price: e.target.value }) }}/>


           <label>Status</label>  
           <Form.Select defaultValue={book.status} onChange={(e) => { setUpdate({ ...update,status: e.target.value }) }} >
          <option value={""}>Choose..</option>
          <option value={"Available"}>Available</option>
          <option value={"Sold Out"}>Sold Out</option>
          
          </Form.Select>
            </form>
        </Modal.Body>
       <Modal.Footer>
          
          <Button variant="primary" onClick={()=>handleUpdateList(book._id)}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit