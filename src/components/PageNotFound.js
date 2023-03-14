import { Link } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = ()=>{
    return(
        <div className='er'>
            <h1>Page Not Found</h1>
            <Link className='btn-link' role='button' to='/'>Go to Home Page</Link>
        </div>
    )
}

export default PageNotFound;