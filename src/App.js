import { Route,Routes } from 'react-router-dom';
import './App.css';
import Landing from './Pages/Landing';
import Dashboard from './Pages/Dashboard';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Auth from './Component/Auth';
import Manage from './Pages/Manage';
import Category from './Pages/Category';
import AdminView from './Pages/AdminView';
import { ToastContainer } from 'react-toastify';
import { useState,useEffect } from 'react';
import { getViewListApi } from './Services/Allapi';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Pages/Cart';
import View from './Pages/View';
import Rent from './Component/Rent';


function App() {
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
  
  return (
    <div className="App" style={{backgroundColor:'black'}} >

      <Routes>
         <Route path='/'element={<Landing/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/login' element={<Auth />}/>
        <Route path='/manage' element={<Manage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/adminview' element={<AdminView/>}/>
      <Route path='/Rent' element={<Rent/>}/>
      {
        viewList?
        viewList.map(item=>(
          <Route path={`/admin/category/${item.genre}`} element={<Category book_Id={item}/>}/>
        )):""
      }

      <Route path='/view' element={<View/>}/>
      {/* <Route path='/view' element={<AdminView/>}/> */}
        
      </Routes>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
