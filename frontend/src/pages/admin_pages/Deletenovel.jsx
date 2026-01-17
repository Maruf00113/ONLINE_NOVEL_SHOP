import { useEffect, useState } from "react";

const Deletenovel = () => {
    const [novels, setnovels] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000")
            .then((response) => response.json())
            .then((data) => setnovels(data))
            .catch((error) => console.error("Error fetching novels:", error));
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {novels.map((novel) => (
                    <div key={novel.id} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-102 transform overflow-hidden">
                        <img src={novel.image} alt={novel.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors line-clamp-1">{novel.name}</h2>
                            <p className="text-gray-600 text-sm mb-4 italic line-clamp-1">{novel.author}</p>
                            <button
                                onClick={() => {
                                    fetch(`http://localhost:3000/deletenobel/${novel._id}`, {
                                        method: "DELETE",
                                    })
                                        .then((response) => {
                                            if (response.ok) {
                                                setnovels(novels.filter((n) => n._id !== novel._id));
                                            } else {
                                                console.error("Failed to delete novel");
                                            }
                                        })
                                        .catch((error) => console.error("Error deleting novel:", error));
                                }}
                                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 hover:shadow-md active:scale-95 w-full"
                            >
                                Delete Novel
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Deletenovel;