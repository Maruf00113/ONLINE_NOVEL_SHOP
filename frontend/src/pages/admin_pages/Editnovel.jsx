import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Editnovel = () => {
    const location = useLocation();
    const initialNovel = location.state?.novel;
    const navigate = useNavigate();
    
    // Use state to manage the novel data
    const [novel, setNovel] = useState(initialNovel);
    
    if (!initialNovel) {
        return <div>No novel data available for editing.</div>;
    }
    
    const UpdatePrice = (e) => {
        e.preventDefault();
        
        const form = e.currentTarget;
        const newPrice = form.price.value;
        
        console.log("Sending request to update price...");
        console.log("Novel ID:", novel._id);
        console.log("New Price:", newPrice);
        
        fetch(`http://localhost:3000/updatenovel/${novel._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price: newPrice }),
        })
        .then((response) => {
            console.log("Response status:", response.status);
            return response.json();
        })
        .then((data) => {
            console.log("Success response:", data);
            
            setNovel({ ...novel, price: newPrice });
            window.alert("Price updated successfully!");
            navigate("/admin/dashboard");
        })
        .catch((error) => {
            console.error("Error occurred:", error);
            window.alert("Failed to update price: " + error.message);
        });
    }
    
    console.log(novel);
    
    return (
        <div>
            <form onSubmit={UpdatePrice} className="relative top-23 max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-4">
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                        Novel Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={novel.name}
                        readOnly
                        className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 cursor-not-allowed"
                    />
                </div>
                
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="author">
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={novel.author}
                        readOnly
                        className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 cursor-not-allowed"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-700 mb-1" htmlFor="price">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={novel.price}
                        onChange={(e) => setNovel({ ...novel, price: e.target.value })}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
                >
                    Update Price
                </button>
            </form>
        </div>
    );
}

export default Editnovel;