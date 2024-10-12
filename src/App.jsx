import './App.css'
import {
  BrowserRouter,
  Routes,

  Route,
  Link,
  useNavigate,
  Navigate,

} from "react-router-dom";
import Home from './assets/Pages/Home';
import VideoPage from './assets/Pages/VideoPage';
import SearchPage from './assets/Pages/SearchPage';
import Signup from './assets/Pages/Signup';
import Login from './assets/Pages/Login';
import Create from './assets/Pages/Create';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { IpFetch } from './Redux/UserReducers';
import axios from 'axios';
function App() {
  const user=useSelector(state=>state.user)
  const [ip,setIP]=useState()
  const dispatch=useDispatch()
  console.log('==>redux user ',user.currentUser)
  // const navigate=useNavigate()
  
    useEffect(()=>{
      const getData = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        console.log('===> ddddd=>',res.data);
        setIP(res.data.ip);
      };
      getData()

    },[])
    if(!user.currentUser && !user.ip ){
      dispatch(IpFetch(ip))

    }

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<VideoPage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/signup" element={!user.currentUser?<Signup/>:<Navigate to={'/'}/>} />
          <Route path="/login" element={!user.currentUser?<Login/>:<Navigate to={'/'}/>} />
          <Route path="/create" element={user.currentUser?<Create/>:<Navigate to={'/login'}/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
