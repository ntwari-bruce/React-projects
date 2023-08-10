import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <h2>Sorry</h2>
            <p>The page you are trying to reach does not exist</p>
            <Link to="/"> Back to home page</Link>
        </div>
     );
}
 
export default NotFound;