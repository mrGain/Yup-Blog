import { useState,useEffect } from "react";
import BlogList from "./Bloglist";

const Home = ()=>{
    const [blogs, setBlog] = useState([
        { title: 'My new website', body: 'lorem impsum...', author: 'Rakesh', id: 1 },
        { title: 'Welcome to party!', body: 'lorem impsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips.', body: 'lorem impsum...', author: 'Rakesh', id: 3 },
    ]);

    const [name, setName] = useState("mario");

    const handleDelete = (id) => {
        setBlog(blogs.filter(blog => blog.id !== id));
    }  
    useEffect(() => {
        console.log('useEffect runned');
    },[name])

    return(

        <div className="home">
            <BlogList Blogs={blogs} title="All Blogs!" handleDelete={ handleDelete }/>
            <button onClick={ () => setName('luige')}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}

export default Home;