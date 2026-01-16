
const AddNovel = () => {
    const addnovel = async (e) => {
        e.preventDefault();
        const form = e.target.form;
        const author = form.author.value;
        const image = form.image.value;
        const paragraph = form.paragraph.value;
        const price = form.price.value;
        const name = form.name.value;
        const response = await fetch("http://localhost:3000/addnovel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ author, image, paragraph, price, name }),
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
            <form className="bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-md">

                <h2 className="font-bold text-2xl text-center mb-6 text-white">
                    Add New Nobel
                </h2>

                <input
                    type="text"
                    name="author"
                    placeholder="Author"
                    className="text-white w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="text-white w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />


                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="text-white w-full mb-3 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="text"
                    name="name"
                    placeholder="Nobel Name"
                    className="text-white w-full mb-5 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <textarea
                    name="paragraph"
                    placeholder="Paragraph"
                    rows="4"
                    className="text-white w-full mb-3 px-4 py-2 border rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    type="submit"
                    onClick={addnovel}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition active:bg-blue-500 cursor-pointer"
                >
                    Add Novel
                </button>

            </form>
        </div>

    );
}

export default AddNovel


//addnovel.jsx file