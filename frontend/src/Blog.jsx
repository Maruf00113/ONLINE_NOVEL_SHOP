import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Blog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/${_id}`)
            .then(res => res.json())
            .then(data => setBlog(data));
    }, [_id]);

    return (
        <>
            {blog ? (
                <>
                    <h1>{blog.name}</h1>
                    <img src={blog.image} />
                    <p>{blog.paragraph}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

export default Blog;