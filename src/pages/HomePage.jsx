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
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CountUp from '../components/CountUp'
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
                    <motion.div
                        initial={{ opacity: 0, x: 6, y: 20 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <span className="hero-badge">Your Growth Is Our Mission</span>
                        <h1>
                            We Build{' '}
                            <motion.span
                                className="highlight"
                                variants={{
                                    hidden: {},
                                    visible: { transition: { staggerChildren: 0.16 } },
                                }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                {['Digital', 'Solutions'].map((word) => (
                                    <motion.span
                                        key={word}
                                        style={{
                                            backgroundImage: 'linear-gradient(90deg, var(--primary-dark) 0%, var(--primary) 35%, #2382f6 65%, var(--primary) 100%)',
                                            backgroundSize: '200% 100%',
                                            backgroundPosition: '100% 0',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                        }}
                                        whileHover={{
                                            backgroundPosition: '0% 0',
                                            transition: { duration: 0.7, ease: 'easeInOut' },
                                        }}
                                        variants={{
                                            hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
                                            visible: {
                                                opacity: 1,
                                                y: 0,
                                                filter: 'blur(0px)',
                                                transition: { duration: 0.65, ease: 'easeOut' },
                                            },
                                        }}
                                    >
                                        {word}
                                    </motion.span>
                                )).reduce((parts, word, index) => (index ? [...parts, ' ', word] : [word]), [])}
                            </motion.span>
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
                    </motion.div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0, scale: 0.8, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                            alt="Digital solutions"
                        />
                        <motion.div
                            className="float-card"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                        >
                            <h4>Our Services</h4>
                            <ul>
                                <li>Web Development</li>
                                <li>Mobile Apps</li>
                                <li>UI/UX Design</li>
                                <li>SEO Services</li>
                            </ul>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="container feature-strip"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    <div className="feature-grid">
                        {featureList.map(({ icon: Icon, label }, index) => (
                            <motion.div
                                key={label}
                                className="feature-item"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 + index * 0.08, duration: 0.6 }}
                            >
                                <Icon size={22} />
                                <span>{label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <div className="container">
                    <motion.div
                        className="mission-grid"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <motion.div
                            className="mission-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Rocket size={52} color="#2563eb" />
                            <h3>Turning Ideas into Reality</h3>
                            <p>Let’s build something amazing together.</p>
                        </motion.div>

                        <motion.div
                            className="mission-card primary"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Target size={52} color="#2563eb" />
                            <h3 style={{ fontSize: '1.5rem', marginTop: 18 }}>Our Mission</h3>
                            <p>
                                To empower businesses with innovative digital solutions that drive growth,
                                efficiency, and success.
                            </p>
                        </motion.div>

                        <motion.div
                            className="mission-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <TrendingUp size={52} color="#06b6d4" />
                            <h3>Your Growth Is Our Mission</h3>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="section-title"
                        style={{ marginTop: '52px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <p className="eyebrow">Trusted by teams</p>
                        {/* <h2>Trusted by 100+ Businesses Worldwide</h2> */}
                        <h2>Trusted by <CountUp value={15} /> Businesses Worldwide</h2>
                    </motion.div>

                    {/* <motion.div
                        className="brand-row"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                    >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft"
                            style={{ width: "50px" }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Upwork_Logo.svg" alt="Upwork" />
                        <div className="brand-text">Clutch</div>
                        <div className="brand-text" style={{ color: '#2563eb' }}>GoodFirms</div>
                    </motion.div> */}
                </div>


            </section>


            <PageHeaderBread title="About Us" />
            <AboutPage showHeader={false} />

            <PageHeaderBread title="Our Services" />
            <ServicesPage showHeader={false} />

            <Features />
            <Video />
            {/* <Testimonials /> */}
            {/* <Pricing /> */}
            <ContactPage showHeader={false} />
        </>
    )
}
