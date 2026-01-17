import './App.css';
import "./index.css";
import Navbar from './Nav';
import Home from './Home'
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Contact from './Contact.jsx';
import { Routes, Route } from "react-router-dom";
import Card_info from './Card_info';
import AddNovel from "./pages/admin_pages/AddNovel.jsx"
import AdminDashboard from "./pages/admin_pages/AdminDashboard.jsx"
import AdminNavbar from "../component/AdminNavbar.jsx"
import Deletenovel from './pages/admin_pages/Deletenovel.jsx';
import ViewUsers from './pages/admin_pages/ViewUsers.jsx';
import Editnovel from './pages/admin_pages/Editnovel.jsx';
import UpdateNovel from './pages/admin_pages/UpdateNovel.jsx';
function App() {
  let user = 0;
  return (
    <>
      {user === 0 ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path="/addnovel" element={<AddNovel />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<section><Navbar /><Home /></section>} />
        <Route path="/Home/:cardId" element={<><Navbar /><Card_info /></>} />
        <Route path="/Login" element={<><Navbar /><Login /></>} />
        <Route path="/Signup" element={<><Navbar /><Signup /></>} />
        <Route path="/Dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/About" element={<><Navbar /><About /></>} />
        <Route path="/Contact" element={<><Navbar /><Contact /></>} />
        <Route path="/deletenovel" element={<Deletenovel />} />
        <Route path="/viewusers" element={<ViewUsers />} />
        <Route path="/updatenovel" element={<UpdateNovel />} />
        <Route path="/editanovel" element={<Editnovel />} />
      </Routes>
    </>
  )
}

export default App;