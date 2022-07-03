import { useState } from "react";

const Create = ()=> {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);

    const handelsubmit = (e)=>{
        e.preventDefault();
        const blog = { title ,body, author }
        fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog),
        }).then(()=>{
            console.log("blog added");
            setIsPending(true);
        })
    }    
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handelsubmit }>
                <label htmlFor="">Blog title:</label>
                <input type="text" required 
                    ovalue={ title }
                    onChange={ (e)=> setTitle(e.target.value) }
                />
                <label htmlFor="">Author Name:</label>
                <input type="text" required 
                    value={ author }
                    onChange={ (e)=> setAuthor(e.target.value) }
                />
                <label htmlFor="">Blog content:</label>
                <textarea name="" id="" cols="30" rows="10" required
                    value={ body }  
                    onChange={ (e)=> setBody(e.target.value) }
                ></textarea>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled >Adding Blog....</button> }
           </form>
        </div>
    );
}

export default Create;