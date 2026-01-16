import './index.css'
import { Link } from "react-router-dom"
import logo from "./photo/image1.png";
const Navbar =()=>
{ 
    return(
        <>
        <div className=" bg-gray-800 py-8 px-8 text-gray-50 fixed w-full z-100 md-2">
            <div className="flex justify-between">
                <div className='flex'>
                    <img src={logo} className='h-12 '/>
                    <p className='text-4xl pt-2'>Mx-Novel</p>
                    
                </div>
                
                <div className='flex justify-center gap-5 text-2xl'>
                    <Link to="/">Home</Link>  
                    <Link to="/Login">Login</Link >
                    <Link to="/Signup">Sign up</Link >
                    <Link to="/Dash">Dashboard</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/About">About</Link>
                </div>
            </div>
        </div>
        </>
    );
}
export default Navbar;