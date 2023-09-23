import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <div className='navbar'>
            <div class="nav-container">
            <div class="nav-child">
                <h1>TUYEN HA</h1>
                <h3>FULL STACK DEVELOPER</h3>
                <hr />
                <Link className='nav-link' to="/">ABOUT ME</Link>
                <Link className='nav-link' to="/portfolio">PROJECTS</Link>
            </div>
            <div class="nav-child">
                <img class="profile-pic" src="./IMG_2442.JPG" alt="profile-photo" width="100"/>
                <h6>DENVER, COLORADO</h6>
            </div>
            </div>
        </div>
    )
}

export default Navbar;