
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const UpdateNovel = () => {
    const [novels, setNovels] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/")
            .then((response) => response.json())
            .then((data) => {
                setNovels(data);
            })
            .catch((error) => {
                console.error("Error fetching novels:", error);
            });
    }, []);

    return (
        <div className="relative top-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {novels.map((novel) => (
                <div
                    key={novel._id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1"
                >
                    <img
                        className="h-56 w-full object-cover"
                        src={novel.image}
                        alt={novel.name}
                    />

                    <div className="p-5 flex flex-col grow">
                        <h2 className="text-xl font-semibold text-gray-800 mb-1">
                            {novel.name}
                        </h2>
                        <p className="text-sm text-gray-700">
                            <span className="font-medium">Author:</span> {novel.author}
                        </p>

                        <p className="text-lg text-blue-600 font-bold mt-2">
                            ${novel.price}
                        </p>

                        <div className="mt-auto pt-4 flex items-center justify-center gap-4 text-center">
                            <Link 

                            to='/editanovel'
                            state={{ novel }} 
                            type="button" className="px-10 py-3 w-full bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
                                Edit
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

}

export default UpdateNovel;