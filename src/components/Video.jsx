import { useState } from 'react'

export default function Video() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className="section video-section">
            <div className="container">
                <div className="section-title">
                    <p className="eyebrow">Ready to help</p>
                    <h2>We are ready to help</h2>
                    <p>
                        At Core Soft Team, we focus on clear communication, practical solutions, and real results — no guesswork, no confusion.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="video-frame">
                    {!isOpen ? (
                        <>
                            <img
                                src="/images/video/image.png"
                                alt="Video cover"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
                                }}
                            />
                            <button type="button" className="play-button" aria-label="Play video" onClick={() => setIsOpen(true)}>
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden="true">
                                    <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                                </svg>
                            </button>
                        </>
                    ) : (
                        <iframe
                            width="100%"
                            height="500"
                            src="https://www.youtube.com/embed/0x5mf8BUJZY?autoplay=1&mute=1&loop=1&playlist=0x5mf8BUJZY&playsinline=1&rel=0"
                            title="Core Soft Team video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    )}
                </div>
            </div>
        </section>
    )
}
