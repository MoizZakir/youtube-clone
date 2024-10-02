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
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/post/:id" element={<VideoPage/>} />
          <Route path="/search/:keywords" element={<SearchPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
