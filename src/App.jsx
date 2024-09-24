import './App.css'
import {
  BrowserRouter,
  Routes,

  Route,
  Link,

} from "react-router-dom";
import Home from './assets/Pages/Home';
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
