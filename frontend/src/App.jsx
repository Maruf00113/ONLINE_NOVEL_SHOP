import './App.css';
import "./index.css";
import Navbar from './Nav';

import Home from './Home'
import Dashboard from './Dashboard';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Contact from './Contact.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card_info from './Card_info' ;

import AddNobel from "./pages/Addnobel.jsx"
function App() {
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
    
  return(
    <>
    <BrowserRouter> 
    <Routes>
      {/* Note : 
      basic about path and element : 
      path: tells React Router which page (URL) the user is going to
      element: tells React Router which component (function) to show on that page. */}
      <Route path="/" element ={<section><Navbar/>,<Home/></section>}/>
      <Route path="/Home/:cardId" element ={<><Navbar/><Card_info/></>}/> 
      <Route path="/Login" element={<><Navbar/><Login/></>}/>
      <Route path="/Signup" element={<><Navbar/><Signup/></>}/>
      <Route path="/Dashboard" element={<><Navbar/><Dashboard/></>}/>
      <Route path="/About" element={<><Navbar/><About/></>}/>
      <Route path="/Contact" element={<><Navbar/><Contact/></>}/>
      <Route path="/Addnobel" element={<AddNobel />} />
    </Routes>
    </BrowserRouter>
    </>
)}

export default App;
export default App

//app.jsx file
