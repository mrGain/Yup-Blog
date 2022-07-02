import { useState,useEffect } from "react";
import BlogList from "./Bloglist";

const Home = ()=>{
    const [blogs, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const handleDelete = (id) => {
        setBlog(blogs.filter(blog => blog.id !== id));
    }  
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlog(data);
                setLoading(false);
            })
        }, 1000);
    }, []);
    return(

        <div className="home">
            { loading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;