import {
    ArrowRight,
    Users,
    BadgeDollarSign,
    Clock3,
    ShieldCheck,
    Headphones,
    BarChart3,
    Rocket,
    Target,
    TrendingUp,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Features from '../components/Features'
import Video from '../components/Video'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import AboutPage from './AboutPage'
import ServicesPage from './ServicesPage'
import ContactPage from './ContactPage'
import PageHeaderBread from '../components/Common/PageHeaderBread'

const featureList = [
    { icon: Users, label: 'Experienced Team' },
    { icon: BadgeDollarSign, label: 'Affordable Pricing' },
    { icon: Clock3, label: 'On-Time Delivery' },
    { icon: ShieldCheck, label: 'Quality Assurance' },
    { icon: Headphones, label: 'Dedicated Support' },
    { icon: BarChart3, label: 'Scalable Solutions' },
]

export default function HomePage() {
    return (
        <>
            <section className="hero">
                <div className="hero-bg" aria-hidden="true" />
                <div className="container hero-inner">
                    <div>
                        <span className="hero-badge">Your Growth Is Our Mission</span>
                        <h1>
                            We Build <span className="highlight">Digital Solutions</span>
                            <br />
                            That Grow Your Business
                        </h1>
                        <p>
                            We help businesses establish a strong online presence with creative,
                            reliable, and result-driven digital solutions that accelerate growth and success.
                        </p>

                        <div className="hero-actions">
                            <Link to="/contact" className="primary-btn">Get Started</Link>
                            <Link to="/services" className="secondary-btn">
                                Explore Services <ArrowRight size={18} style={{ verticalAlign: 'middle' }} />
                            </Link>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                            alt="Digital solutions"
                        />
                        <div className="float-card">
                            <h4>Our Services</h4>
                            <ul>
                                <li>Web Development</li>
                                <li>Mobile Apps</li>
                                <li>UI/UX Design</li>
                                <li>SEO Services</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container feature-strip">
                    <div className="feature-grid">
                        {featureList.map(({ icon: Icon, label }) => (
                            <div key={label} className="feature-item">
                                <Icon size={22} />
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-card ">
                            <Rocket size={52} color="#2563eb" />
                            <h3>Turning Ideas into Reality</h3>
                            <p>Let’s build something amazing together.</p>
                        </div>

                        <div className="mission-card primary">
                            <Target size={52} color="#2563eb" />
                            <h3 style={{ fontSize: '1.5rem', marginTop: 18 }}>Our Mission</h3>
                            <p>
                                To empower businesses with innovative digital solutions that drive growth,
                                efficiency, and success.
                            </p>
                        </div>

                        <div className="mission-card">
                            <TrendingUp size={52} color="#06b6d4" />
                            <h3>Your Growth Is Our Mission</h3>
                        </div>
                    </div>

                    <div className="section-title" style={{ marginTop: '52px' }}>
                        <p className="eyebrow">Trusted by teams</p>
                        <h2>Trusted by 100+ Businesses Worldwide</h2>
                    </div>

                    <div className="brand-row">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft"
                            style={{ width: "50px" }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg" alt="Upwork" />
                        <div className="brand-text">Clutch</div>
                        <div className="brand-text" style={{ color: '#2563eb' }}>GoodFirms</div>
                    </div>
                </div>


            </section>


            <PageHeaderBread title="About Us" />
            <AboutPage showHeader={false} />

            <PageHeaderBread title="Our Services" />
            <ServicesPage showHeader={false} />

            <Features />
            <Video />
            <Testimonials />
            <Pricing />
            <ContactPage showHeader={false} />
        </>
    )
}
