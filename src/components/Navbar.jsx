import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Snowflake, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

    // Determine colors based on page and scroll status
    const isDarkBackground = isHomePage && !isScrolled && !isMenuOpen && !isMobile;
    const textColor = isDarkBackground ? 'white' : 'var(--brand-navy)';
    const logoColor = isDarkBackground ? 'white' : 'var(--brand-blue-dark)';
    const navbarBg = (isScrolled || isMobile) ? 'rgba(255, 255, 255, 1)' : 'transparent';

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Product', path: '/product' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: navbarBg,
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
                padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
                transition: 'all 0.3s ease',
                boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
                borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <NavLink to="/" style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <img
                            src="/images/company_logo.png"
                            alt="CCTT Logo"
                            style={{
                                height: '80px',
                                width: 'auto',
                                borderRadius: '4px',
                                objectFit: 'contain',
                                transform: 'translateY(12px)'
                            }}
                        />
                        <span style={{
                            fontWeight: 800,
                            fontSize: '1.5rem',
                            color: textColor,
                            transition: 'color 0.3s ease',
                            marginLeft: '-40px',
                            zIndex: 1,
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}>CCTT</span>
                    </NavLink>

                    {/* Desktop Links */}
                    <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="nav-desktop">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                style={({ isActive }) => ({
                                    fontWeight: 600,
                                    color: isActive ? 'var(--brand-blue-main)' : textColor,
                                    fontSize: '1rem',
                                    position: 'relative',
                                    transition: 'color 0.3s ease'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink to="/contact" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
                            Get Started
                        </NavLink>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'none',
                            color: 'white',
                            zIndex: 1100,
                            background: 'var(--brand-navy)',
                            padding: '0.65rem',
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s ease',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                        className="nav-mobile-toggle"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <style>{`
            @media (max-width: 768px) {
              .nav-desktop { display: none !important; }
              .nav-mobile-toggle { display: block !important; }
            }
          `}</style>
            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '85%',
                            maxWidth: '320px',
                            background: 'var(--brand-navy)',
                            zIndex: 1050,
                            boxShadow: '-20px 0 40px rgba(0,0,0,0.3)',
                            padding: '6rem 2.5rem 2.5rem 2.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2.25rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                style={({ isActive }) => ({
                                    fontWeight: 700,
                                    color: isActive ? 'var(--brand-blue-main)' : 'white',
                                    fontSize: '1.4rem',
                                    transition: 'color 0.3s ease'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <NavLink
                            to="/contact"
                            className="btn-primary"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ justifyContent: 'center', marginTop: '1rem' }}
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
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.4)',
                            zIndex: 1040,
                            backdropFilter: 'blur(4px)',
                            WebkitBackdropFilter: 'blur(4px)'
                        }}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
