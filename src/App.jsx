import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Buy from './pages/Buy'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Rent from './pages/Rent'
import Sell from './pages/Sell'
import BuyerResources from './pages/resources/BuyerResources.jsx'
import InvestorResources from './pages/resources/InvestorResources.jsx'
import SellerResources from './pages/resources/SellerResources.jsx'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/rent" element={<Rent />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/resources/buyers" element={<BuyerResources />} />
                <Route path="/resources/sellers" element={<SellerResources />} />
                <Route path="/resources/investors" element={<InvestorResources />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App