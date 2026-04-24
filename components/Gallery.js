'use client';
import { useState, useEffect, useCallback } from 'react';

const FALLBACK = [
    'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=900&q=80',
    'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&q=80',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80',
    'https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=900&q=80',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=900&q=80',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80',
    'https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=900&q=80',
    'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=900&q=80',
];

const PER_PAGE = 6;

export default function Gallery() {
    const [images, setImages] = useState(FALLBACK);
    const [page, setPage] = useState(0);
    const [lightbox, setLightbox] = useState(null);

    useEffect(() => {
        fetch('/api/images/gallery')
            .then((r) => r.json())
            .then((d) => {
                if (d.images?.length) setImages(d.images);
            })
            .catch(() => {});
    }, []);

    const totalPages = Math.ceil(images.length / PER_PAGE);
    const visible = images.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

    const closeLb = useCallback(() => setLightbox(null), []);
    const prevLb = useCallback(
        () => setLightbox((i) => (i - 1 + images.length) % images.length),
        [images.length],
    );
    const nextLb = useCallback(
        () => setLightbox((i) => (i + 1) % images.length),
        [images.length],
    );

    useEffect(() => {
        if (lightbox === null) return;
        const fn = (e) => {
            if (e.key === 'Escape') closeLb();
            if (e.key === 'ArrowLeft') prevLb();
            if (e.key === 'ArrowRight') nextLb();
        };
        window.addEventListener('keydown', fn);
        return () => window.removeEventListener('keydown', fn);
    }, [lightbox, closeLb, prevLb, nextLb]);

    return (
        <section id="galerie" className="ct-gallery py-5">
            <div className="container py-4">
                {/* Header row */}
                <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
                    <div>
                        <span className="section-label mb-2">Galerie</span>
                        <h2
                            className="mb-2"
                            style={{ fontSize: 'clamp(24px, 4vw, 40px)' }}
                        >
                            Privește magia
                        </h2>
                        <p
                            className="mb-0"
                            style={{
                                fontSize: '13px',
                                color: 'rgba(232,213,180,0.55)',
                                maxWidth: '360px',
                                lineHeight: 1.6,
                            }}
                        >
                            O călătorie vizuală prin Cabana Traila și
                            împrejurimile sale.
                        </p>
                    </div>
                    <div className="d-flex gap-2">
                        <button
                            className="ct-nav-circle"
                            onClick={() => setPage((p) => Math.max(0, p - 1))}
                            disabled={page === 0}
                            aria-label="Previous page"
                        >
                            <i className="bi bi-arrow-left" />
                        </button>
                        <button
                            className="ct-nav-circle"
                            onClick={() =>
                                setPage((p) => Math.min(totalPages - 1, p + 1))
                            }
                            disabled={page === totalPages - 1}
                            aria-label="Next page"
                        >
                            <i className="bi bi-arrow-right" />
                        </button>
                    </div>
                </div>

                {/* Grid — featured first image spans 2 cols / 2 rows on md+ */}
                <div className="row g-2">
                    {visible.map((src, i) => {
                        const globalIdx = page * PER_PAGE + i;
                        const isFeatured = i === 0;
                        return (
                            <div
                                key={src}
                                className={
                                    isFeatured
                                        ? 'col-12 col-md-8'
                                        : 'col-6 col-md-4'
                                }
                                style={{
                                    aspectRatio: isFeatured ? '16/9' : '1/1',
                                }}
                            >
                                <div
                                    className="ct-gallery-item h-100"
                                    onClick={() => setLightbox(globalIdx)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) =>
                                        e.key === 'Enter' &&
                                        setLightbox(globalIdx)
                                    }
                                >
                                    <img
                                        src={src}
                                        alt={`Gallery photo ${globalIdx + 1}`}
                                    />
                                    <div className="ct-gallery-overlay">
                                        <i className="bi bi-zoom-in ct-gallery-zoom" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Pagination dots */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center gap-2 mt-4">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                className="ct-page-dot"
                                onClick={() => setPage(i)}
                                style={{
                                    width: i === page ? '24px' : '8px',
                                    background:
                                        i === page
                                            ? 'var(--ct-orange)'
                                            : 'rgba(200,133,42,0.3)',
                                }}
                                aria-label={`Page ${i + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Count */}
                <p
                    className="text-center mt-3 mb-0"
                    style={{
                        fontSize: '12px',
                        color: 'rgba(200,169,122,0.4)',
                        letterSpacing: '0.1em',
                    }}
                >
                    {page * PER_PAGE + 1}–
                    {Math.min((page + 1) * PER_PAGE, images.length)} of{' '}
                    {images.length} fotografii
                </p>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div className="ct-lightbox" onClick={closeLb}>
                    <img
                        src={images[lightbox]}
                        alt={`Photo ${lightbox + 1}`}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <button
                        className="ct-lb-btn ct-lb-close"
                        onClick={closeLb}
                        aria-label="Close"
                    >
                        <i className="bi bi-x-lg" />
                    </button>
                    <button
                        className="ct-lb-btn ct-lb-prev"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevLb();
                        }}
                        aria-label="Previous"
                    >
                        <i className="bi bi-chevron-left" />
                    </button>
                    <button
                        className="ct-lb-btn ct-lb-next"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextLb();
                        }}
                        aria-label="Next"
                    >
                        <i className="bi bi-chevron-right" />
                    </button>
                    <div className="ct-lb-counter">
                        {lightbox + 1} / {images.length}
                    </div>
                </div>
            )}
        </section>
    );
}
