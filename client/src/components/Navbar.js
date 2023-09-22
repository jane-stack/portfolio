import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <div>
            <div><h3>Tuyen Ha's Portfolio</h3></div>
            <Link to="/">ABOUT ME</Link>
            <Link to="/portfolio">PORTFOLIO</Link>
        </div>
    )
}

export default Navbar;