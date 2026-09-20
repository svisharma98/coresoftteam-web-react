import {
    Monitor,
    ShoppingCart,
    Smartphone,
    Code2,
    PenTool,
    Users,
    BarChart3,
    Headphones,
} from 'lucide-react'
import Breadcrumb from '../components/Common/Breadcrumb'

const services = [
    { title: 'Website Design & Development', description: 'We build modern, responsive and user-friendly websites that represent your brand perfectly.', icon: Monitor },
    { title: 'E-commerce Development', description: 'We create secure, scalable and high-performing e-commerce solutions that drive sales.', icon: ShoppingCart },
    { title: 'Mobile App Development', description: 'We build innovative Android & iOS applications that engage users and grow your business.', icon: Smartphone },
    { title: 'Custom Software Development', description: 'Custom software tailored to improve business processes and efficiency.', icon: Code2 },
    { title: 'UI/UX Design', description: 'Beautiful and intuitive user experiences that delight your customers.', icon: PenTool },
    { title: 'CRM & ERP Solutions', description: 'Powerful CRM & ERP systems to streamline your operations.', icon: Users },
    { title: 'Digital Transformation', description: 'Helping businesses embrace new technologies for sustainable growth.', icon: BarChart3 },
    { title: 'Maintenance & Support', description: 'Reliable maintenance and technical support to keep your systems running smoothly.', icon: Headphones },
]

export default function ServicesPage({ showHeader = true }) {
    return (
        <>
            {showHeader && (
                <Breadcrumb
                    pageName="Our Services"
                    description="We provide end-to-end software development services, helping businesses create secure, scalable, and high-performance digital products."
                />
            )}

            <section className="section">
                <div className="container">
                    <div className="section-title">
                        <p className="eyebrow">What We Do</p>
                        <h2>Comprehensive Digital Solutions to Grow Your Business</h2>
                        <p>
                            From powerful websites to custom software, we provide end-to-end digital solutions tailored to your business needs.
                        </p>
                    </div>

                    <div className="service-grid">
                        {services.map(({ title, description, icon: Icon }) => (
                            <div className="service-card" key={title}>
                                <div className="service-icon">
                                    <Icon size={30} />
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
