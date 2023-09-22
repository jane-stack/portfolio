import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <div className='navbar'>
            <div class="nav-container">
            <div class="nav-child">
                <h1>Professional Portfolio</h1>
                <h3>Full-Stack Engineer | Web Developer</h3>
                <hr />
                <Link className='nav-link' to="/">ABOUT ME</Link>
                <Link className='nav-link' to="/portfolio">PORTFOLIO</Link>
            </div>
            <div class="nav-child">
                <img class="profile-pic" src="./IMG_2442.JPG" alt="profile-photo" width="100"/>
                <h4>TUYEN HA</h4>
            </div>
            </div>
        </div>
    )
}

export default Navbar;