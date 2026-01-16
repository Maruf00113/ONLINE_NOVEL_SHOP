import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Card_info() {
  const { cardId } = useParams();//id ta ekhane asbe... cardID e store hobe...
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then(res => res.json())
      .then(data => setBlog(data.find(item => item._id == cardId)));//cardId ta element.id or item.id er sathe match korle blog e data jabe...
  }, [cardId]);

  if (!blog) return <p className="text-5xl text-center p-5">Loading...</p>; //blog na paoah porjonto loading show korbe...

  return (
    <>
    <div className="text-center">
      <div className="flex justify-center">
        <img className="sm:h-180 h-100" src={blog.image}/>
      </div>
      <div className="text-2xl">
        <h1 className="text-4xl py-5">{blog.name}</h1>
        <h1 className="py-5">{blog.author}</h1>
        <p className="px-3">{blog.paragraph}</p> 
      </div>
    </div>
    </>
  );
}