'use client';

const reviews = [
    {
        stars: 5,
        text: '"Un vis absolut. Atenția la detalii din cabană este incredibilă. Am petrecut ore întregi privind stelele — este locul perfect pentru a te deconecta și a te reîncărca."',
        name: 'Adriana S.',
        date: '',
        initials: 'AS',
        color: '#7B4F2E',
    },
    {
        stars: 5,
        text: '„Cabana Traila a depășit toate așteptările. Patul era incredibil de confortabil. Traseele private de drumeție au fost un bonus imens.”"',
        name: 'Mihai T.',
        date: '',
        initials: 'MT',
        color: '#2E5B4F',
    },
    {
        stars: 5,
        text: '„Arhitectură frumoasă care încadrează perfect natura înconjurătoare. Lumina dimineții care pătrunde prin ferestrele masive este magică. Cu siguranță vom reveni.”',
        name: 'Alexandru E.',
        date: '',
        initials: 'AE',
        color: '#4F2E5B',
    },
];

export default function Reviews() {
    return (
        <section id="review-uri" className="ct-reviews py-5">
            <div className="container py-4">
                <div className="text-center mb-5">
                    <span className="section-label mb-3">Review-uri</span>
                    <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}>
                        Povești din inima pădurii
                    </h2>
                </div>

                <div className="row g-4">
                    {reviews.map((r) => (
                        <div className="col-12 col-md-6 col-lg-4" key={r.name}>
                            <div className="ct-review-card d-flex flex-column h-100">
                                <div className="ct-stars mb-3">
                                    {'★'.repeat(r.stars)}
                                </div>
                                <p
                                    className="flex-grow-1 mb-4"
                                    style={{
                                        fontFamily:
                                            "'Cormorant Garamond', serif",
                                        fontSize: '15px',
                                        fontStyle: 'italic',
                                        color: 'rgba(232,213,180,0.82)',
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {r.text}
                                </p>
                                <div className="d-flex align-items-center gap-3">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                                        style={{
                                            width: '38px',
                                            height: '38px',
                                            background: r.color,
                                            fontSize: '12px',
                                            color: '#fff',
                                            fontWeight: 700,
                                            fontFamily: "'Lato', sans-serif",
                                        }}
                                    >
                                        {r.initials}
                                    </div>
                                    <div>
                                        <p
                                            className="mb-0 fw-bold"
                                            style={{
                                                fontSize: '13px',
                                                color: 'var(--ct-text)',
                                            }}
                                        >
                                            {r.name}
                                        </p>
                                        <p
                                            className="mb-0"
                                            style={{
                                                fontSize: '11px',
                                                color: 'var(--ct-muted)',
                                            }}
                                        >
                                            {r.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
