import React from 'react';
import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    { /* Use Navlink to highlight the Active link at the moment */}
                    <li><Link to="/first">First</Link></li>
                    <li><Link to="/second">Second</Link></li>
                    <li><Link to="/container">Container</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;