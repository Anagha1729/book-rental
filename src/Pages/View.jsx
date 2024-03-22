import React,{useState,useEffect} from 'react'
import { getPayviewApi } from '../Services/Allapi'
import { Button } from 'react-bootstrap'

function View() {
  const [pviewList, setPviewList] = useState("")
  useEffect(() => {
    handlePviewList()
  }, [localStorage.getItem("token")])
  console.log(pviewList);

  const handlePviewList = async () => {
    const reqHeader = {
      "Content-Type": "application/json", "Authorization": `bearer ${localStorage.getItem("token")}`
    }
    console.log(reqHeader)
    const res = await getPayviewApi(reqHeader)
    if (res.status === 200) {
      setPviewList(res.data)
    }
  }
  console.log(pviewList);
 return (
    <div className='py-5'>
        <h3 className='text-center'>BOOK RECORDS & SUMMERY</h3>
        {/* <Button>Add Book</Button> */}
        <div class="mt-3 border border-dark shadow p-3">
                <table class="table table-bordered">
                    <tr>
                        <th>SL.No</th>
                        <th>Book Title</th>
                        <th>Reader Name</th>
                        <th>Address & Contact</th>
                        <th>Rental Date</th>
                        <th>Due Date</th>
                    </tr>
                   {
                    
                    pviewList?
                    pviewList.map((item,index)=>(
                      <tr>
                      <td>{index+1}</td>
                      <td>{item.title}</td>
                      <td>{item.reader}</td>
                      <td>{item.Address}</td>
                      <td>{item.rentaldate}</td>
                      <td>{item.duedate}</td>
                    </tr>
                    )):""
                   }
                    </table>
    </div>
    </div>
  )
}

export default View