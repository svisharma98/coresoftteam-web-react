export default function PageHeader({ pageName, description }) {
    const sectionStyle = {
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        paddingTop: '28px',
        background: 'linear-gradient(135deg, rgba(96,165,250,0.12), var(--page-surface) 48%, rgba(99,102,241,0.08))',
    }

    const contentStyle = {
        position: 'relative',
        zIndex: 1,
        maxWidth: '820px',
        minHeight: '220px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '26px 0 42px',
        margin: '0 auto',
    }

    const headingStyle = {
        margin: 0,
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.05em',
    }

    const headingTextStyle = {
        background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 35%, #0891b2 100%)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
    }

    const paragraphStyle = {
        maxWidth: '700px',
        margin: '18px auto 0',
        color: 'var(--muted)',
        lineHeight: 1.8,
        fontSize: '1.08rem',
    }

    return (
        <section className="page-banner-shell" style={sectionStyle}>
            <div className="page-banner-visual" aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.3, color: 'var(--primary)' }}>
                <svg
                    className="page-banner-wave"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    style={{ position: 'absolute', inset: 'auto 0 0', width: '100%', height: '100%', display: 'block' }}
                >
                    <path
                        fill="currentColor"
                        d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,192C1200,171,1320,117,1380,90.7L1440,64L1440,320L0,320Z"
                    />
                </svg>
                <div className="page-banner-glow" style={{ position: 'absolute', left: '50%', top: '30px', width: '460px', height: '460px', transform: 'translateX(-50%)', borderRadius: '999px', background: 'rgba(59, 130, 246, 0.18)', filter: 'blur(110px)' }} />
                <span className="page-banner-bubble bubble-one" style={{ position: 'absolute', display: 'block', borderRadius: '999px', background: 'rgba(96, 165, 250, 0.2)', filter: 'blur(6px)', top: '52px', left: '80px', width: '88px', height: '88px' }} />
                <span className="page-banner-bubble bubble-two" style={{ position: 'absolute', display: 'block', borderRadius: '999px', background: 'rgba(96, 165, 250, 0.2)', filter: 'blur(6px)', top: '100px', right: '110px', width: '62px', height: '62px' }} />
                <span className="page-banner-bubble bubble-three" style={{ position: 'absolute', display: 'block', borderRadius: '999px', background: 'rgba(96, 165, 250, 0.2)', filter: 'blur(6px)', bottom: '52px', left: '120px', width: '50px', height: '50px' }} />
                <span className="page-banner-bubble bubble-four" style={{ position: 'absolute', display: 'block', borderRadius: '999px', background: 'rgba(96, 165, 250, 0.2)', filter: 'blur(6px)', right: '150px', bottom: '62px', width: '84px', height: '84px' }} />
                <div className="page-banner-icon icon-one" style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', borderRadius: '22px', boxShadow: '0 24px 46px rgba(15, 23, 42, 0.08)', color: '#2563eb', fontWeight: 800, left: '110px', top: '50%', width: '72px', height: '72px', transform: 'rotate(12deg)' }}>
                    <span>{'</>'}</span>
                </div>
                <div className="page-banner-icon icon-two" style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', borderRadius: '22px', boxShadow: '0 24px 46px rgba(15, 23, 42, 0.08)', color: '#2563eb', fontWeight: 800, right: '120px', top: '64px', width: '72px', height: '72px', transform: 'rotate(-12deg)' }}>
                    <span>{'{}'}</span>
                </div>
                <div className="page-banner-icon icon-three" style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(16px)', borderRadius: '22px', boxShadow: '0 24px 46px rgba(15, 23, 42, 0.08)', color: '#2563eb', fontWeight: 800, right: '200px', bottom: '54px', width: '64px', height: '64px' }}>
                    <span>💻</span>
                </div>
            </div>

            <div className="container page-banner-content" style={contentStyle}>
                <h1 style={headingStyle}>
                    <span style={headingTextStyle}>{pageName}</span>
                </h1>
                <p style={paragraphStyle}>{description}</p>
            </div>
        </section>
    )
}
