import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Snowflake, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

/**
 * Defines the structure for a single navigation link.
 */
interface NavLinkItem {
    name: string;
    path: string;
}

/**
 * Navbar Component
 * Handles responsive navigation, scroll-based styling, and mobile menu state.
 * Supports theme-aware styling (dark-bg vs default) based on current page and scroll position.
 */
const Navbar = () => {
    // Navbar background state (transparent vs solid)
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    // Mobile menu open/close state
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    // Router hooks for active path detection
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isPricingPage = location.pathname === '/pricing';

    // Desktop/Mobile breakpoint state
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        /**
         * Update scroll state to trigger navbar background change
         */
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        /**
         * Update mobile state on window resize
         */
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
    const isDarkBackground = (isHomePage || isPricingPage) && !isScrolled && !isMenuOpen;
    const navbarClasses = `navbar ${isScrolled ? 'scrolled' : ''} ${isMobile ? 'mobile' : ''} ${isDarkBackground ? 'dark-bg' : ''} ${isMenuOpen ? 'menu-open' : ''}`;

    /**
     * Navigation configuration array
     * Used for both desktop link rendering and mobile drawer
     */
    const navLinks: NavLinkItem[] = [
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
                        <img src="/images/company_logo.png" alt="Cold Cycle Tracking Technology Logo" className="navbar-logo" />
                        <span className="navbar-brand-text">Cold Cycle Tracking Technology</span>
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

                    {/* Shared Controls (Toggle + Mobile Menu) */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', transform: 'translateY(-4px)' }}>
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="nav-mobile-toggle"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

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
                        <div style={{ padding: '0.5rem', display: 'flex', justifyContent: 'flex-end', opacity: 0 }}>
                            {/* Placeholder */}
                        </div>
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
