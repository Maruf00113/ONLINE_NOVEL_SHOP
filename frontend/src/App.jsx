import {  Route, Routes } from "react-router-dom"
import Navbar from "../component/Navbar.jsx"
import AddNobel from "./pages/Addnobel.jsx"
function App() {

  return (
    <>  
      <Navbar />
      <Routes>
          <Route path="/Addnobel" element={<AddNobel />} />
      </Routes>
    
    </>
  )
}

export default App
