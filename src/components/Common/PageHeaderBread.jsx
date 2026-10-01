export default function PageHeaderBread({ title }) {
    return (
        <section className="page-header-bread-shell">
            <div className="page-header-bread-overlay" aria-hidden="true">
                <svg
                    className="page-header-bread-wave"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <g className="page-header-wave page-header-wave-back">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            from="0 0"
                            to="-1440 0"
                            dur="34s"
                            repeatCount="indefinite"
                            calcMode="linear"
                        />
                        <path
                            fill="var(--primary-dark)"
                            d="M0,170C180,225 360,245 540,205C720,165 900,95 1080,120C1260,145 1350,195 1440,170L1440,320L0,320Z"
                        />
                        <path
                            fill="var(--primary-dark)"
                            transform="translate(1440 0)"
                            d="M0,170C180,225 360,245 540,205C720,165 900,95 1080,120C1260,145 1350,195 1440,170L1440,320L0,320Z"
                        />
                    </g>
                    <g className="page-header-wave page-header-wave-middle">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            from="0 0"
                            to="-1440 0"
                            dur="25s"
                            repeatCount="indefinite"
                            calcMode="linear"
                        />
                        <path
                            fill="var(--primary)"
                            d="M0,205C180,160 360,125 540,155C720,185 900,255 1080,235C1260,215 1350,170 1440,205L1440,320L0,320Z"
                        />
                        <path
                            fill="var(--primary)"
                            transform="translate(1440 0)"
                            d="M0,205C180,160 360,125 540,155C720,185 900,255 1080,235C1260,215 1350,170 1440,205L1440,320L0,320Z"
                        />
                    </g>
                    <g className="page-header-wave page-header-wave-front">
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            from="0 0"
                            to="-1440 0"
                            dur="19s"
                            repeatCount="indefinite"
                            calcMode="linear"
                        />
                        <path
                            fill="currentColor"
                            d="M0,245C240,175 420,175 660,225C900,275 1140,285 1320,245C1380,232 1410,235 1440,245L1440,320L0,320Z"
                        />
                        <path
                            fill="currentColor"
                            transform="translate(1440 0)"
                            d="M0,245C240,175 420,175 660,225C900,275 1140,285 1320,245C1380,232 1410,235 1440,245L1440,320L0,320Z"
                        />
                    </g>
                </svg>
            </div>

            <div className="page-header-bread-inner">
                <h1 className="page-header-bread-title">{title}</h1>
            </div>
        </section>
    )
}
