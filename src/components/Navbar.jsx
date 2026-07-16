import { Link } from 'react-router-dom'
import logo from '../assets/CrisafiRealEstateFullLogo.png'

function Navbar () {
    return (
        <nav>
            <Link to="/">
                <img src={logo} alt="Anthony Real Estate Logo" />
            </Link>

            <div>
                <Link to="/buy">Buy</Link>
                <Link to="/sell">Sell</Link>
                <Link to="/rent">Rent</Link>
                <Link to="/about">About</Link>
                <div>
                    Resources
                </div>
                <Link to="/contact">Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar