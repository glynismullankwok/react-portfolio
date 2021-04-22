import classes from './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/skills">Skills</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        </div>

    );
}

export default Navbar;
