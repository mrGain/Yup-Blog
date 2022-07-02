const BlogList = ({ Blogs, title, handleDelete }) => {
    // const blogs = props.Blogs;
    return(
        <div className="blog-list">
            <h2>{ title }</h2>
            {Blogs.map((blog) => (
                <div className="blogPreview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <button onClick={ () => handleDelete(blog.id) } >delete blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
