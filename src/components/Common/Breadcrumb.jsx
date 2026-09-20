export default function Breadcrumb({ pageName, description }) {
    return (
        <section className="breadcrumb-shell">
            <section className="breadcrumb-inner">
                <div className="breadcrumb-visual" aria-hidden="true">
                    <svg
                        className="absolute bottom-0 w-full h-full text-blue-200 dark:text-slate-800"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="currentColor"
                            d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,192C1200,171,1320,117,1380,90.7L1440,64L1440,320L0,320Z"
                        />
                    </svg>

                </div>

                <div className="breadcrumb-glow" aria-hidden="true" />
                <div className="floating-ball" aria-hidden="true" />
                <div className="floating-ball2" aria-hidden="true" />
                <div className="floating-ball3" aria-hidden="true" />
                <div className="floating-ball4" aria-hidden="true" />

                <div className="floating-icon" aria-hidden="true">{'</>'}</div>
                <div className="floating-icon2" aria-hidden="true">{'{}'}</div>
                <div className="floating-icon3" aria-hidden="true">💻</div>

                <div className="breadcrumb-content">
                    <h1 className="breadcrumb-title">
                        <span className="animate-gradient">{pageName}</span>
                    </h1>
                    <p className="breadcrumb-description">{description}</p>
                </div>
            </section>
        </section>
    )
}
