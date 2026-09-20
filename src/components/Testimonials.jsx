const starIcon = (
    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current" aria-hidden="true">
        <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
    </svg>
)

const testimonialData = [
    {
        id: 1,
        name: 'Krishnan Shrestha',
        designation: 'Founder @Textile',
        content:
            'Our members are so impressed. It’s intuitive. It’s clean. It’s distraction free. If you’re building a community.',
        image: '/images/testimonials/avatar1.jpeg',
        star: 5,
    },
    {
        id: 2,
        name: 'Kausik Singh',
        designation: 'Founder @MedicalJobs',
        content:
            'Our members are so impressed. It’s intuitive. It’s clean. It’s distraction free. If you’re building a community.',
        image: '/images/testimonials/avatar1.jpeg',
        star: 5,
    },
    {
        id: 3,
        name: 'Vipin Maurya',
        designation: 'Founder @MobileApp',
        content:
            'Our members are so impressed. It’s intuitive. It’s clean. It’s distraction free. If you’re building a community.',
        image: '/images/testimonials/avatar1.jpeg',
        star: 5,
    },
]

export default function Testimonials() {
    return (
        <section className="section testimonials-section">
            <div className="container">
                <div className="section-title">
                    <p className="eyebrow">Testimonials</p>
                    <h2>What Our Users Says</h2>
                    <p>
                        Core Soft Team turned our idea into a fully functioning app in weeks. Professional, fast, and easy to work with!
                    </p>
                </div>

                <div className="testimonial-grid">
                    {testimonialData.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="stars">
                                {Array.from({ length: testimonial.star }).map((_, idx) => (
                                    <span key={`${testimonial.id}-${idx}`}>{starIcon}</span>
                                ))}
                            </div>

                            <p className="testimonial-content">“{testimonial.content}</p>

                            <div className="testimonial-person">
                                <div className="testimonial-avatar-wrap">
                                    {/* <img src={testimonial.image} alt={testimonial.name} onError={(e) => {
                                        e.currentTarget.src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
                                    }} /> */}
                                    <img src={testimonial.image} alt={testimonial.name} />
                                </div>
                                <div>
                                    <h3>{testimonial.name}</h3>
                                    <p>{testimonial.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
