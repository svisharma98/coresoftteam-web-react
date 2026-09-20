const plans = [
    {
        name: 'Lite',
        price: '$40',
        duration: '/mo',
        subtitle: 'Perfect for early-stage startups and simple digital product needs.',
        active: ['All UI Components', 'Use with Unlimited Projects', 'Commercial Use', 'Email Support'],
        inactive: ['Lifetime Access', 'Free Lifetime Updates'],
    },
    {
        name: 'Basic',
        price: '$399',
        duration: '/mo',
        subtitle: 'Built for growing businesses ready to scale their digital presence.',
        active: ['All UI Components', 'Use with Unlimited Projects', 'Commercial Use', 'Email Support', 'Lifetime Access'],
        inactive: ['Free Lifetime Updates'],
    },
    {
        name: 'Plus',
        price: '$589',
        duration: '/mo',
        subtitle: 'Advanced support and premium delivery for complex product needs.',
        active: ['All UI Components', 'Use with Unlimited Projects', 'Commercial Use', 'Email Support', 'Lifetime Access', 'Free Lifetime Updates'],
        inactive: [],
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="section pricing-section">
            <div className="container">
                <div className="section-title">
                    <p className="eyebrow">Pricing</p>
                    <h2>Simple and Affordable Pricing</h2>
                    <p>
                        At Core Soft Team, we believe in transparent pricing that fits businesses of all sizes — whether you’re a startup or an established enterprise. No hidden fees. No surprises. Just high-quality service at a fair price.
                    </p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`pricing-card ${plan.name === 'Basic' ? 'popular' : ''}`}>
                            <div className="plan-tag">{plan.name}</div>
                            <div className="plan-price">
                                <span>{plan.price}</span>
                                <small>{plan.duration}</small>
                            </div>
                            <p className="plan-subtitle">{plan.subtitle}</p>

                            <ul className="plan-list">
                                {plan.active.map((item) => (
                                    <li key={item}>✓ {item}</li>
                                ))}
                                {plan.inactive.map((item) => (
                                    <li key={item} className="muted">— {item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
