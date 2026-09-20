export default function PageHeaderBread({ title }) {
    return (
        <section className="page-header-bread-shell">
            <div className="page-header-bread-overlay" aria-hidden="true">
                <svg
                    className="page-header-bread-wave"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="currentColor"
                        d="M0,224L60,213.3C120,203,240,181,360,176C480,171,600,181,720,192C840,203,960,213,1080,192C1200,171,1320,117,1380,90.7L1440,64L1440,320L0,320Z"
                    />
                </svg>
            </div>

            <div className="page-header-bread-inner">
                <h1 className="page-header-bread-title">{title}</h1>
            </div>
        </section>
    )
}
