import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/CrisafiRealEstateFullLogo.png'

function Navbar () {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 transition-colors duration-300 z-50 
            ${isScrolled ? 'bg-blue-950/70 backdrop-blur-sm' : 'bg-transparent'}`}>
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