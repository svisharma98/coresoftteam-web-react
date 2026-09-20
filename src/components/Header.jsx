import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('core-soft-team-theme')
        if (savedTheme) return savedTheme === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const root = document.documentElement
        root.setAttribute('data-theme', darkMode ? 'dark' : 'light')
        root.style.colorScheme = darkMode ? 'dark' : 'light'
        localStorage.setItem('core-soft-team-theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    return (
        <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner">
                <NavLink to="/" className="logo" aria-label="Core Soft Team home">
                    <img
                        src="/images/logo/logo.png"
                        alt="Core Soft Team logo"
                        className="brand-logo"
                    />
                </NavLink>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === '/'}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="header-actions">
                    <NavLink to="/contact" className="primary-btn">
                        Get Started
                    </NavLink>
                    <button
                        type="button"
                        className="theme-toggle"
                        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        onClick={() => setDarkMode((value) => !value)}
                    >
                        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        type="button"
                        className="menu-toggle"
                        aria-label="Toggle navigation menu"
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>
        </header>
    )
}
