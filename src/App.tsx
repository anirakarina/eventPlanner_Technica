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
        <Route path="/" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/MySchedule" element={<MySchedule/>}/>
        <Route path="/FullSchedule" element={<FullSchedule/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;