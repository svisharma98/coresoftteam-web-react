import {
    ArrowRight,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { Link } from 'react-router-dom'

const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
]

const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Cloud Solutions',
    'AI Integration',
]

const socials = [
    { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
    { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
    { icon: XIcon, href: 'https://x.com', label: 'X / Twitter', color: '#000000' },
    { icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn', color: '#0A66C2' },
    { icon: GitHubIcon, href: 'https://github.com', label: 'GitHub', color: '#181717' },
    { icon: YouTubeIcon, href: 'https://youtube.com', label: 'YouTube', color: '#FF0000' },
]

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <img
                            src="/images/logo/logo.png"
                            alt="Core Soft Team"
                            className="footer-brand-logo"
                        />

                        <p>
                            Building innovative, secure, and scalable software solutions that empower businesses with modern technology and digital transformation.
                        </p>

                        <div className="social-row">
                            {socials.map(({ icon: Icon, href, label, color }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className="social-icon-link"
                                >
                                    <Icon sx={{ fontSize: 28, color }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <div>
                            <h3>Quick Links</h3>
                            <ul className="footer-links">
                                {quickLinks.map((item) => (
                                    <li key={item.label}>
                                        <Link to={item.to} className="footer-link-item">
                                            <ArrowRight size={15} />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3>Services</h3>
                            <ul className="footer-links">
                                {services.map((service) => (
                                    <li key={service}>
                                        <Link to="/services" className="footer-link-item">{service}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3>Contact</h3>
                        <div className="footer-contact-list">
                            <div className="info-item">
                                <span className="info-icon"><Phone size={18} /></span>
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="info-item">
                                <span className="info-icon"><Mail size={18} /></span>
                                <span>info@coresoftteam.com</span>
                            </div>
                            <div className="info-item">
                                <span className="info-icon"><MapPin size={18} /></span>
                                <span>New Delhi, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-cta">
                    <div className="footer-cta-copy">
                        <span className="cta-badge">
                            🚀 Let's Work Together
                        </span>
                        <h3>Let's Build Something Great Together</h3>
                        <p>
                            Whether you're launching a startup, modernizing your business, or scaling your digital products, our experienced team is ready to transform your ideas into secure, scalable, and high-quality software solutions.
                        </p>
                    </div>

                    <div className="cta-actions">
                        <Link to="/contact" className="primary-btn white-btn">
                            Get Free Consultation
                        </Link>
                        <Link to="/services" className="secondary-btn cta-secondary">
                            Explore Services
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Core Soft Team. All rights reserved.</p>

                    <div className="footer-utility">
                        <Link to="/privacy-policy" className="footer-utility-link">Privacy Policy</Link>
                        <Link to="/terms" className="footer-utility-link">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
