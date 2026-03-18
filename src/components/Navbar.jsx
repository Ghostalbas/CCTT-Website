import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Snowflake, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Determine state classes
    const isDarkBackground = isHomePage && !isScrolled && !isMenuOpen && !isMobile;
    const navbarClasses = `navbar ${isScrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''} ${isDarkBackground ? 'dark-bg' : ''}`;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Product', path: '/product' },
        { name: 'How It Works', path: '/how-it-works' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav className={navbarClasses}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <NavLink to="/" className="navbar-logo-link">
                        <img src="/images/company_logo.png" alt="CCTT Logo" className="navbar-logo" />
                        <span className="navbar-brand-text">CCTT</span>
                    </NavLink>

                    {/* Desktop Links */}
                    <div className="nav-desktop">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink to="/contact" className="btn-primary">
                            Get Started
                        </NavLink>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="nav-mobile-toggle"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="mobile-drawer"
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/contact"
                            className="btn-primary"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Get Started
                        </NavLink>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Backdrop */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMenuOpen(false)}
                        className="mobile-backdrop"
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
