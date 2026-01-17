import { useEffect, useState } from "react";
import "./index.css";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Home()
{
    /*
    box = jar moddhe blog er card gula rakbo, like 2d array
    setter = ekta function , je blog gula box e rakbe
    useState = initially empty...
    */
    const [box, setter] = useState([]);
    const email=localStorage.getItem("userEmail") || "";
    console.log("Home page email:", email);
    useEffect(() => {
        // data fetch kore box e boshabo
        fetch("http://localhost:3000")
            .then((res) => res.json())
            .then((data) => setter(data));
    }, []);         

    function single_card(x) {
        return (
            // single card gular html....
            x.map((element) => (
                <div className="border-0 shadow rounded-md p-5 hover:scale-105 duration-300 bg-slate-100 hover:bg-gray-50">
                    <img className="h-100" src={element.image}/>
                    
                    <p className="text-3xl">
                        <b>{element.name}</b><span className="text-xl">  (Author name : {element.author})</span>
                    </p>
                    
                    <p className="text-2xl">Price : {element.price}$</p>
                    {
                        email !== "" ? (
                            <NavLink to={`/Home/${element._id}`} state={{ email: email }}> 
                                <button className=" mt-3 px-5 py-2  rounded-md text-xl hover:scale-110 duration-300 bg-gray-800  text-gray-50">Read blog</button>
                            </NavLink>
                        ) : (
                            <NavLink to={`/Login`}> 
                                <button onClick={() => {window.alert("Please login to read the blog.");}} className=" mt-3 px-5 py-2  rounded-md text-xl hover:scale-110 duration-300 bg-gray-800  text-gray-50">Read blog</button>
                            </NavLink>
                        )
                    }
                </div>
            ))
        );
    }

    return (
        <>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-8  z-10">
                {single_card(box.slice(0,10))}
            </div>
            
        </>
    );
}
export default Home;