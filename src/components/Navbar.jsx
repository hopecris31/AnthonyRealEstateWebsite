import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import logoColor from '../assets/CrisafiRealtySerif.png'
import logoWhite from '../assets/CrisafiRealtySerifWhite.png'

function Navbar () {
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()

    const navLinkStyle = "relative inline-block group"
    const underlineStyle = "absolute left-0 -bottom-1 w-full h-0.5 bg-current scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
    const submenuUnderlineStyle = "absolute left-0 -bottom-2 w-full h-0.5 bg-current scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"

    useEffect(() => {
        const heroSection = document.getElementById('hero-section')
        const scrollThreshold = heroSection
            ? heroSection.offsetHeight - window.innerHeight
            : 20

        const handleScroll = () => {
            setIsScrolled(window.scrollY > scrollThreshold)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [location.pathname])

    return (
        <nav className={`font-title fixed top-0 left-0 w-full flex items-stretch justify-between px-8 py-4 transition-colors duration-300 z-50 
            ${isScrolled ? 'bg-navy/85 backdrop-blur-sm' : 'bg-transparent'}`}>
            <Link to="/" className="flex items-center">
                <img src={isScrolled ? logoWhite : logoColor} alt="Crisafi Realty Logo"
                     className={`w-auto transition-all duration-300 ${isScrolled ? 'h-16' : 'h-28 drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]'}`}/>
            </Link>

            <button className="md:hidden flex items-center justify-center text-2xl text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu">
                {isMobileMenuOpen ? 'x' : '☰'}
            </button>

            <div className={`hidden md:flex items-center transition-all duration-300 font-medium ${
                isScrolled ? 'gap-8 text-base text-white' : 'gap-16 text-xl text-black'}`}>
                <Link to="/buy" className={navLinkStyle}>
                    BUY
                    <span className={underlineStyle}></span>
                </Link>
                <Link to="/sell" className={navLinkStyle}>
                    SELL
                    <span className={underlineStyle}></span>
                </Link>
                <Link to="/rent" className={navLinkStyle}>
                    RENT
                    <span className={underlineStyle}></span>
                </Link>
                <Link to="/about" className={navLinkStyle}>
                    ABOUT
                    <span className={underlineStyle}></span>
                </Link>

                <div
                    className="relative self-stretch flex items-center"
                    onMouseEnter={() => setIsResourcesOpen(true)}
                    onMouseLeave={() => setIsResourcesOpen(false)}
                >
                    <button className="relative inline-block group cursor-pointer">
                        RESOURCES
                        <span className={underlineStyle}></span>
                    </button>

                    <div
                        className={`absolute top-full -left-4 pl-4 mt-4 flex flex-col items-start gap-6 py-3 overflow-hidden origin-top transition-all duration-300 ${
                            isScrolled ? 'w-56 bg-navy/85 text-white' : 'w-64 bg-transparent text-black'
                        } ${
                            isResourcesOpen
                                ? 'scale-y-100 opacity-100'
                                : 'scale-y-0 opacity-0 pointer-events-none'
                        }`}
                    >
                        <Link to="/resources/buyers" className="relative inline-block group leading-none whitespace-nowrap">
                            BUYER RESOURCES
                            <span className={submenuUnderlineStyle}></span>
                        </Link>
                        <Link to="/resources/sellers" className="relative inline-block group leading-none whitespace-nowrap">
                            SELLER RESOURCES
                            <span className={submenuUnderlineStyle}></span>
                        </Link>
                        <Link to="/resources/investors" className="relative inline-block group leading-none whitespace-nowrap">
                            INVESTOR RESOURCES
                            <span className={submenuUnderlineStyle}></span>
                        </Link>
                    </div>
                </div>
                <Link to="/contact" className={navLinkStyle}>
                    CONTACT
                    <span className={underlineStyle}></span>
                </Link>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-blue-950 md:hidden flex
                flex-col items-center gap-6 py-8 text-white text-2xl">
                    <Link to="/buy" onClick={() => setIsMobileMenuOpen(false)}>Buy</Link>
                    <Link to="/sell" onClick={() => setIsMobileMenuOpen(false)}>Sell</Link>
                    <Link to="/rent" onClick={() => setIsMobileMenuOpen(false)}>Rent</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link to="/resources/buyers" onClick={() => setIsMobileMenuOpen(false)}>Buyer Resources</Link>
                    <Link to="/resources/sellers" onClick={() => setIsMobileMenuOpen(false)}>Seller Resources</Link>
                    <Link to="/resources/investors" onClick={() => setIsMobileMenuOpen(false)}>Investor Resources</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
            )}
        </nav>
    )
}

export default Navbar