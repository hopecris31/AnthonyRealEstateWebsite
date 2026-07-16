import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/CrisafiRealEstateFullLogo.png'

function Navbar () {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between px-8 py-4">
            <Link to="/">
                <img src={logo} alt="Crisafi Realty Logo" className="h-28 w-auto"/>
            </Link>

            <div className="flex items-center gap-16 text-xl font-medium">
                <Link to="/buy">Buy</Link>
                <Link to="/sell">Sell</Link>
                <Link to="/rent">Rent</Link>
                <Link to="/about">About</Link>

                <div className="relative" onMouseEnter={() => setIsResourcesOpen(true)}
                     onMouseLeave={() => setIsResourcesOpen(false)}>
                    <button className="cursor-pointer">Resources</button>

                    {isResourcesOpen && (
                        <div className="absolute top-full left-0 flex flex-col bg-white shadow-lg rounded-md py-2 w-48">
                            <Link to="/resources/buyers" className="px-4 py-2 hover:bg-gray-100">
                                Buyer Resources
                            </Link>
                            <Link to="/resources/sellers" className="px-4 py-2 hover:bg-gray-100">
                                Seller Resources
                            </Link>
                            <Link to="/resources/investors" className="px-4 py-2 hover:bg-gray-100">
                                Investor Resources
                            </Link>
                        </div>
                    )}
                </div>
                <Link to="/contact">Contact</Link>
            </div>

        </nav>
    )
}

export default Navbar