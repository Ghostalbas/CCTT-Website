import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Snowflake, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine colors based on page and scroll status
    const isDarkBackground = isHomePage && !isScrolled;
    const textColor = isDarkBackground ? 'white' : 'var(--brand-navy)';
    const logoColor = isDarkBackground ? 'white' : 'var(--brand-blue-dark)';

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Product', path: '/product' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.5rem', color: logoColor, transition: 'color 0.3s ease' }}>
                    <div style={{ background: 'var(--brand-blue-dark)', color: 'white', padding: '0.4rem', borderRadius: '0.5rem', display: 'flex' }}>
                        <Snowflake size={24} />
                    </div>
                    <span>CCTT</span>
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

                {/* Mobile Toggle (Simplified for now) */}
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none' }} className="nav-mobile-toggle">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
