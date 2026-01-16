import { useNavigate } from "react-router-dom";


export default function AdminDashboard() {
    const navigate = useNavigate();
    function addnovel() {
        navigate("/addnovel");
    }
    function editnovel() {
        navigate("/editnovel");
    }
    function deletenovel() {
        navigate("/deletenovel");
    }

    return (
        <div className="min-h-screen bg-gray-100 pt-30">


            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                <div className="bg-blue-500 text-white rounded-lg p-6 text-center">
                    <h2 className="text-lg">Total Novels</h2>
                    <p className="text-4xl font-bold mt-2">0</p>
                </div>

                <div className="bg-green-500 text-white rounded-lg p-6 text-center">
                    <h2 className="text-lg">Total Orders</h2>
                    <p className="text-4xl font-bold mt-2">0</p>
                </div>
            </div>

            {/* Management Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-6">

                {/* Manage Novels */}
                <div className="bg-white rounded-lg p-6 shadow">
                    <h3 className="text-lg font-semibold mb-4">Manage Novels</h3>
                    <div className="flex flex-col gap-3">
                        <button onClick={addnovel} type="button" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700 active:bg-blue-600 cursor-pointer">
                            + Add Novel
                        </button>
                        <button onClick={deletenovel} type="button" className="bg-red-500 text-white py-2 rounded hover:bg-red-700 active:bg-red-600 cursor-pointer">
                            🗑 Delete Novel
                        </button>
                    </div>
                </div>

                {/* Manage Orders */}
                <div className="bg-white rounded-lg p-6 shadow">
                    <h3 className="text-lg font-semibold mb-4">Manage Orders</h3>
                    <div className="flex flex-col gap-3">
                        <button type="button" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-700 active:bg-blue-600 cursor-pointer">
                            👁 View Orders
                        </button>
                        <button type="button" className="bg-green-500 text-white py-2 rounded hover:bg-green-700 active:bg-green-600 cursor-pointer">
                            ✔ Update Status
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

//admin dashboard