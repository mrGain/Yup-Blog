import { useState,useEffect } from "react";
import BlogList from "./Bloglist";

const Home = ()=>{
    const [blogs, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){    
                    throw Error("could not fetch data for that resource ");
                }
                return res.json();
            })
            .then(data => {
                setBlog(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            })    
        }, 1000);
    }, []);
    return(

        <div className="home">
            { error && <div>{ error }</div> }
            { loading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;