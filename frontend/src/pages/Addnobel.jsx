
const AddNobel = () => {
    const addnobel = async (e) => {
        e.preventDefault();
        const form = e.target.form;
        const author = form.author.value;
        const image = form.image.value;
        const paragraph = form.paragraph.value;
        const price = form.price.value;
        const name = form.name.value;
        const response = await fetch("http://localhost:3000/addnobel", {
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
        <div>
            <form>  
                <input type="text" placeholder="Author" name="author" /><br />
                <input type="text" placeholder="Image URL" name="image" /><br />
                <textarea placeholder="Paragraph" name="paragraph"></textarea><br />
                <input type="number" placeholder="Price" name="price" /><br />
                <input type="text" placeholder="Name" name="name" /><br />
                <button onClick={addnobel} type="submit">Add Nobel</button>
            </form>
        </div>
    );
}

export default AddNobel