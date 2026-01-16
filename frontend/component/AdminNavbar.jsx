import { useNavigate } from "react-router-dom";
  
const AdminNavbar = () => {
  const navigate = useNavigate();
  function GoMainPage() {
    navigate("/admin/dashboard");
  }
  return (
    <div className="fixed w-full flex justify-between items-center bg-blue-900 text-white px-6 py-4">
      <h1 className="text-xl font-semibold">
        📘 Online Nobel Shop – Admin Panel
      </h1>
      <div>
        <button type="button" onClick={GoMainPage} className="bg-green-500 px-4 py-2 rounded-2xl hover:bg-green-700 active:bg-green-600 cursor-pointer mr-4">
          go to main page →
        </button>
        <button type="button" className="bg-red-500 px-4 py-2 rounded-2xl hover:bg-red-700 active:bg-red-600 cursor-pointer">
          Logout
        </button>
        
      </div>
    </div>
  );
}

export default AdminNavbar;
