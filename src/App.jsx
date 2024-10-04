import './App.css'
import {
  BrowserRouter,
  Routes,

  Route,
  Link,

} from "react-router-dom";
import Home from './assets/Pages/Home';
import VideoPage from './assets/Pages/VideoPage';
import SearchPage from './assets/Pages/SearchPage';
import Signup from './assets/Pages/Signup';
import Login from './assets/Pages/Login';
import Create from './assets/Pages/Create';
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<VideoPage/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/create" element={<Create/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
