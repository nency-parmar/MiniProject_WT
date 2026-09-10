import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const links = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Places', path: '/places' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' }
    ];

    return (
        <>
            <header className={`site-header ${location.pathname === '/' ? '' : 'site-header-inner'}`}>
                <div className="nav-shell">
                    <Link className="brand" to="/" onClick={() => setMenuOpen(false)}>
                        <span className="brand-mark">tnw</span>
                        <span className="brand-copy"><strong>Travel</strong><small>In New World</small></span>
                    </Link>
                    <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span><span></span><span></span>
                    </button>
                    <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
                        {links.map((link) => <Link key={link.path} className={location.pathname === link.path ? 'active' : ''} to={link.path} onClick={() => setMenuOpen(false)}>{link.label}</Link>)}
                        <Link className="nav-cta" to="/places/booknow" onClick={() => setMenuOpen(false)}>Plan a trip <span>↗</span></Link>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
}

export default Header;