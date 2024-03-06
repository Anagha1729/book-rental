import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import readingBook from '../Asset/5.jpg'
import { registerApi,loginApi, userLoginApi } from '../Services/Allapi'


function Auth({ register }) {

  const registerForm = register ? true : false
  const [userData, setUserData] = useState({
    username: "", password: "", email: ""
  })
  const navigate = useNavigate()
  console.log(userData)
  const handleRegistration= async(e)=>{
    e.preventDefault()
    if(!userData.username || !userData.password || !userData.email){
      toast.error("Enter Values to Every Fields!")
    }
    else{
      const res=await registerApi(userData)
      console.log(res);
      if(res.status===200){
         toast.success("Registration  is Successfull!!")
       setUserData({username:"",password:"",email:""})
        navigate('/login')
      }
      else{
        toast.error(res.response)
      }
  }

  console.log(userData)
}
const handleLogin = async (e) => {
   e.preventDefault()
  console.log(userData)
  const { email, password } = userData
  if (!email || !password) {
    toast.warning("Enter Valid Details")
  }
  else {
    const res = await userLoginApi(userData)
    if (res.status === 200 && res.data.existingUser) {
      localStorage.setItem("currentUser", JSON.stringify(res.data.existingUser))
      localStorage.setItem("role", res.data.role)
      localStorage.setItem("token", res.data.token)
      toast.success("Login Successfully!!")
      navigate('/dashboard')
    }
     else  if(res.status===200 && res.data.existingAdmin){
      localStorage.setItem("currentUser", JSON.stringify(res.data.existingAdmin))
      localStorage.setItem("role", res.data.role)
      localStorage.setItem("token", res.data.token)
      toast.success("Login Successfully!!")
      navigate('/view')

     }
     else{
      toast.error("Login failed! Please try again")
     }
     
  }
}

return (
  <div className='d-flex justify-content-center align-items-center py-5' style={{ width: '100%', height: '100%' }}>
    <div className='container w-75 fw-bolder'>
      <Link to={'/'} style={{ textDecoration: 'none' }} className='d-flex align-items-center'>
        <i class="fa-solid fa-arrow-left"></i>
        Back To Home
      </Link>
      <div className='p-5 rounded' style={{ backgroundColor: '#b8b8b369' }}>
      {/* <div className='p-5 rounded' style={{ backgroundColor: '#083469fa' }}> */}
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <img src={readingBook} alt="img" height={400}  width={300}/>

          </div>
          <div className='col-lg-6'>
            <div className='d-flex align-items-center flex-column'>
              <div className='d-flex mt-2'>

                <span className='fw-bolder h2'></span> <br />

                <p>Today's Reader Tomorrow's Leader</p>


              </div>
              <h4 >
                {
                  registerForm ? 'Sign Up for Your Account' : 'Sign In for Your Account'
                }

              </h4>
              <form className='w-100'>
                {
                  registerForm &&
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" value={userData.username} onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }} />
                  </Form.Group>
                }
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>E-Mail:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Email" value={userData.email} onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" placeholder="Enter Your Password" value={userData.password} onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} />
                </Form.Group>

              </form>
              {
                registerForm ?
                  <div>
                    <button type='submit' className='btn text-center mt-4' style={{backgroundColor:'#dd3589'}} onClick={handleRegistration}>Sign Up</button>
                    {' '}<Link to={'/login'}>Already A User?Sign in...</Link>
                  </div> :
                  <div>
                    <button type='submit' className='btn text-center mt-4' style={{backgroundColor:'#dd3589'}} onClick={handleLogin}>Sign In</button>
                    {' '}<Link to={'/register'}>New User?Sign Up..</Link>
                  </div>
              }


            </div>
          </div>
        </div>
      </div>
    </div>

    <ToastContainer />
  </div>
  
)
}

export default Auth
