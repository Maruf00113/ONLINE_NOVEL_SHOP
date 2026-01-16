import {  Route, Routes } from "react-router-dom"
import Navbar from "../component/Navbar.jsx"
import AddNovel from "./pages/admin_pages/AddNovel.jsx"
import AdminDashboard from "./pages/admin_pages/AdminDashboard.jsx"
import AdminNavbar from "../component/AdminNavbar.jsx"
function App() {
  let user=0;
  return (
    <>  
    {user===0? <AdminNavbar /> : <Navbar />}
      <Routes>
          <Route path="/addnovel" element={<AddNovel />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    
    </>
)}

export default App

//app.jsx file
