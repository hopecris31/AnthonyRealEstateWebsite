import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoColor from '../assets/CrisafiRealEstateFullLogo.png'
import logoWhite from '../assets/CrisafiRealtyLogoFullWhitescale.png'

function Navbar () {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
                <img src={isScrolled ? logoWhite : logoColor} alt="Crisafi Realty Logo"
                     className={`w-auto transition-all duration-300 ${isScrolled ? 'h-16' : 'h-28'}`}/>
            </Link>

            <button className="md:hidden text-2xl text-white" onCLick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu">
                {isMobileMenuOpen ? 'x' : '☰'}
            </button>

            <div className={`hidden md:flex items-center transition-all duration-300 font-medium ${
                isScrolled ? 'gap-8 text-base text-white' : 'gap-16 text-xl text-black'}`}>
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

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-blue-950 md:hidden flex
                flex-col items-center gap-6 py-8 text-white text-2xl">
                    <Link to="/buy" onClick{() => setIsMobileMenuOpen(false)}>Buy</Link>
                    <Link to="/sell" onClick{() => setIsMobileMenuOpen(false)}>Sell</Link>
                    <Link to="/rent" onClick{() => setIsMobileMenuOpen(false)}>Rent</Link>
                    <Link to="/about" onClick{() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link to="/resources/buyers" onClick{() => setIsMobileMenuOpen(false)}>Buyer Resources</Link>
                    <Link to="/resources/sellers" onClick{() => setIsMobileMenuOpen(false)}>Seller Resources</Link>
                    <Link to="/resources/investors" onClick{() => setIsMobileMenuOpen(false)}>Investor Resources</Link>
                    <Link to="/contact" onClick{() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar