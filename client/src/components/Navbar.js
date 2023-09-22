import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <div className='navbar'>
            <div><h3>Tuyen Ha's Portfolio</h3></div>
            <Link className='nav-link' to="/">ABOUT ME</Link>
            <Link className='nav-link' to="/portfolio">PORTFOLIO</Link>
        </div>
    )
}

export default Navbar;