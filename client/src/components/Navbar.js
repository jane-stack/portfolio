import { Link } from 'react-router-dom';

function Navbar () {

    return (
        <div className='navbar'>
            <div class="flex-container">
            <div class="flex-child">
                <h2>Tuyen Ha's Portfolio</h2>
            </div>
            <div class="flex-child">
                <img class="profile-pic" src="./IMG_2442.JPG" alt="profile-photo" width="100"/>
            </div>
            </div>
                <Link className='nav-link' to="/">ABOUT ME</Link>
                <Link className='nav-link' to="/portfolio">PORTFOLIO</Link>
        </div>
    )
}

export default Navbar;