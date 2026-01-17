import { useState } from "react";
import { useEffect } from "react";
import { use } from "react";


const ViewUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, []);
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-slate-800 mb-8 border-b-2 border-indigo-500 pb-2 w-fit">
                Available Users
            </h1>
            <div className="flex flex-col gap-4">
                <div className="flex justify-center bg-indigo-200 p-4 rounded-md backdrop:blur-sm">
                    <p className="items-center p-2 text-4xl font-bold text-amber-700 animate-bounce">Total users : {users.length-1}</p>
                </div>

                {
                users.filter(user => user.email !== "admin@gmail.com").map(user => (
                    <div
                        className="flex items-center justify-between border border-slate-200 p-5 bg-white shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 rounded-xl group"
                        key={user._id}
                    >
                        <div className="flex flex-col">
                            <div className="h-10 w-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-500 font-bold group-hover:bg-indigo-500 group-hover:text-white transition-all">
                            {user.name.charAt(0)}
                              </div>
                            <h2 className="text-xl font-bold text-slate-700 group-hover:text-indigo-600 transition-colors">
                                {user.name}
                            </h2>
                            <p className="text-slate-500 font-medium italic">
                                {user.email}
                            </p>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewUsers;