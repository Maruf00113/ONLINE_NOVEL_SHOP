
import './index.css'
import { useState } from "react";
import { auth } from "./firebase/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const userinfo = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Registered:", userinfo.user);
            navigate("/login");
        } catch (error) {
            window.alert("Registration failed. Please try again." + error.message);
            console.error("Error:", error.message);
        }
    };

    return (
        <div className="border px-5 py-7 rounded-md relative top-30 lg:top-60 sm:left-[30%] lg:left-[40%] left-[10%] flex flex-col w-100 text-center">
            <p className="text-4xl py-3">Sign up</p>
            <input
                className="border text-2xl rounded-md px-3 mt-3 hover:bg-yellow-100 hover:scale-105 duration-300"
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                className="border text-2xl rounded-md px-3 mt-3 hover:bg-yellow-100 hover:scale-105 duration-300"
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button className="mt-4 bg-yellow-400 text-2xl rounded-md py-1 hover:bg-yellow-300 hover:scale-105 duration-300" onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Signup;