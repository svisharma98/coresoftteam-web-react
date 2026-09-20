import { CheckCircle, Lightbulb, ShieldCheck, Sparkles, Users } from 'lucide-react'
import Breadcrumb from '../components/Common/Breadcrumb'

const stats = [
    { number: '20+', label: 'Projects Completed' },
    { number: '15+', label: 'Happy Clients' },
    { number: '7+', label: 'Years of Experience' },
    { number: '24/7', label: 'Support Available' },
]

const values = [
    { icon: Lightbulb, title: 'Innovation', text: 'We embrace new ideas and technologies to deliver better solutions.' },
    { icon: ShieldCheck, title: 'Quality', text: 'We are committed to delivering excellence in every project.' },
    { icon: Sparkles, title: 'Integrity', text: 'We believe in transparency, honesty, and building trust with our clients.' },
    { icon: Users, title: 'Customer Success', text: 'We grow when our clients grow. Your success is at the heart of everything we do.' },
]

export default function AboutPage({ showHeader = true }) {
    return (
        <>
            {showHeader && (
                <Breadcrumb
                    pageName="About Us "
                    description="Coresoftteam delivers modern, secure, and scalable software solutions that help businesses innovate, grow, and succeed in the digital world."
                />
            )}

            <section className="section">
                <div className="container about-grid">
                    <div className="about-copy">
                        <span className="eyebrow">Who We Are</span>
                        <h2>Your Trusted Partner for Digital Growth</h2>
                        <p>
                            Coresoftteam is a passionate team of developers, designers, strategists, and technology experts dedicated to helping businesses build scalable digital solutions. We combine innovation, creativity, and technology to transform ideas into successful digital products.
                        </p>

                        <div className="check-list">
                            {[
                                'Client-focused approach',
                                'Innovative solutions',
                                'On-time delivery',
                                'Long-term support',
                                'Premium quality',
                                'Developer friendly',
                            ].map((item) => (
                                <div key={item} className="check-item">
                                    <span className="icon-box"><CheckCircle size={16} /></span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-visual-wrap">
                        <img
                            src="https://images.openai.com/static-rsc-4/1TKGVPRmMI__dvkMbbmJA-6x5f4M3wpx1GifAVu4ycs8jhMXNfqNGdoDq5pYEEsKrWvtk6XzOwbiAN-M6z-JuJy5b7p_b_Q_G5WDD-2-w--UER3uCr8VROBo7CJpareU_p1XWBOS2i_nU_mnPXK6bi92vCJwefF5s0lpj5EPVFc?purpose=inline"
                            alt="About team"
                            className="about-visual-image"
                        />
                    </div>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((item) => (
                            <div className="stat-box" key={item.label}>
                                <h3>{item.number}</h3>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section about-values-section">
                <div className="container">
                    <div className="section-title">
                        <p className="eyebrow">Our Values</p>
                        <h2>What Drives Us</h2>
                    </div>

                    <div className="values-grid">
                        {values.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="value-card">
                                <div className="icon-wrap">
                                    <Icon size={28} color="#2563eb" />
                                </div>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
