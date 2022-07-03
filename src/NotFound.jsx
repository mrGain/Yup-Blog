import { Link } from "react-router-dom";
const Notfound = () => {
    return (
        <div className="not-found">
            <h2>Sorry ...</h2>
            <p>Page not found</p>
            <Link to='/'>Back to Home Page....</Link>
        </div>
        
    );
}

export default Notfound;