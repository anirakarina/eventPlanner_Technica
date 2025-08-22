import './App.css'
import FullSchedule from './pages/FullSchedule';
import MySchedule from './pages/MySchedule';
import Login from './pages/Login';
import Signup from './pages/Signup';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullSchedule/>}/>
        <Route path="/MySchedule" element={<MySchedule/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;