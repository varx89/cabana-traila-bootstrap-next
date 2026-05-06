'use client';
import { useState, useEffect, useCallback } from 'react';

const FALLBACK = ['/hero/1.jpeg', '/hero/2.jpeg', '/hero/3.jpeg'];

export default function Hero() {
    const [images, setImages] = useState(FALLBACK);
    const [current, setCurrent] = useState(0);
    const [fading, setFading] = useState(false);

    // useEffect(() => {
    //     fetch('/api/images/hero')
    //         .then((r) => r.json())
    //         .then((d) => {
    //             if (d.images?.length) setImages(d.images);
    //         })
    //         .catch(() => {});
    // }, []);

    const goTo = useCallback(
        (idx) => {
            if (fading) return;
            setFading(true);
            setTimeout(() => {
                setCurrent(idx);
                setFading(false);
            }, 420);
        },
        [fading],
    );

    const prev = () => goTo((current - 1 + images.length) % images.length);
    const next = useCallback(
        () => goTo((current + 1) % images.length),
        [current, images.length, goTo],
    );

    useEffect(() => {
        const t = setInterval(next, 5500);
        return () => clearInterval(t);
    }, [next]);

    return (
        <section className="ct-hero" id="about">
            {/* Slides */}
            {images.map((src, i) => (
                <div
                    key={src}
                    className="ct-hero-slide"
                    style={{
                        opacity: i === current ? (fading ? 0 : 1) : 0,
                        zIndex: i === current ? 1 : 0,
                    }}
                >
                    <img src={src} alt={`Cabana Traila – slide ${i + 1}`} />
                </div>
            ))}

            {/* Overlay */}
            <div className="ct-hero-overlay" />
            <div className="ct-hero-bottom-fade" />

            {/* Content */}
            <div className="ct-hero-content d-flex align-items-center justify-content-center text-center">
                <div className="px-3" style={{ maxWidth: '680px' }}>
                    {/* <span className="section-label anim-fade-up mb-3 fs-5">
                        Bine ați venit in lumea pădurilor
                    </span> */}

                    <h1
                        className="anim-fade-up anim-delay-1 fw-bold text-white"
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(40px, 8vw, 82px)',
                            lineHeight: 1.05,
                        }}
                    >
                        <span className="fs-1 fst-italic">Evadare către</span>
                        <br />
                        <em style={{ color: '#E8C98A', fontStyle: 'italic' }}>
                            Cabana Trăila
                        </em>
                    </h1>

                    <p
                        className="anim-fade-up anim-delay-2 mx-auto mt-3 mb-4"
                        style={{
                            fontSize: 'clamp(13px, 2vw, 15px)',
                            color: 'rgba(232,213,180,0.8)',
                            lineHeight: 1.75,
                            maxWidth: '460px',
                        }}
                    >
                        <span className="fs-6 fst-italic">
                            O retragere rustică cuibărită adânc în stejarii
                            seculari. Deconectați-vă de la lume și
                            reconectați-vă cu natura.
                        </span>
                    </p>

                    <div className="anim-fade-up anim-delay-3">
                        <a href="#despre" className="btn-ct-outline">
                            Descoperă magia <span>✦</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Arrows */}
            {images.length > 1 && (
                <>
                    <button
                        className="ct-hero-arrow prev"
                        onClick={prev}
                        aria-label="Previous slide"
                    >
                        <i className="bi bi-chevron-left" />
                    </button>
                    <button
                        className="ct-hero-arrow next"
                        onClick={next}
                        aria-label="Next slide"
                    >
                        <i className="bi bi-chevron-right" />
                    </button>

                    {/* Dots */}
                    <div className="ct-hero-dots">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                className={`ct-hero-dot ${i === current ? 'active' : ''}`}
                                style={{
                                    width: i === current ? '28px' : '8px',
                                }}
                                onClick={() => goTo(i)}
                                aria-label={`Slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Counter */}
                    <div className="ct-hero-counter">
                        {/* {String(current + 1).padStart(2, '0')} /{' '}
                        {String(images.length).padStart(2, '0')} */}
                    </div>
                </>
            )}
        </section>
    );
}
