import './App.css'
import FullSchedule from './pages/FullSchedule'
import MySchedule from './pages/MySchedule';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullSchedule/>}/>
        <Route path="/MySchedule" element={<MySchedule/>}/>
      </Routes>
    </BrowserRouter>
    // <>
    //   <FullSchedule />
    //   <MySchedule />
    //   {/* I just put both pages to see them both, you can remove whichever to view one at a time*/}
    // </>
  )
}

export default App;