import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, loading } = useFetch('http://localhost:8000/blogs/'+id)
    const navigate = useNavigate();
    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: "DELETE",
        }).then(() => {
            navigate("/");
        })
    }

    return (
        <div className="blog-details">
            { loading && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by <span>{ blog.author }</span></p>
                    <div>{ blog.body }</div>
                </article>
            ) }

            <button onClick={ handleDelete } >Delete</button>
        </div>
    );
}

export default BlogDetails;