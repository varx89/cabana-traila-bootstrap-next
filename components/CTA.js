'use client';

const plans = [
    {
        label: 'Pe Zi',
        price: '800',
        currency: 'lei',
        icon: '🌲',
        features: [
            'Check-in flexibil',
            'Acces complet la cabană',
            'Parcare inclusă',
        ],
        highlight: false,
    },
    {
        label: 'Pe Săptămână',
        price: '4.500',
        currency: 'lei',
        icon: '🏕️',
        features: [
            '7 nopți cazare',
            'Reducere față de tariful zilnic',
            'Curățenie inclusă',
        ],
        highlight: true,
    },
    {
        label: 'Weekend',
        price: '1.500',
        currency: 'lei',
        icon: '🔥',
        features: [
            'Vineri – Duminică',
            '2 nopți cazare',
            'Grătar și lemne incluse',
        ],
        highlight: false,
    },
];

export default function CTA() {
    return (
        <section id="tarife" className="ct-cta py-5">
            <div className="container py-4">
                <div className="text-center mb-5">
                    <span className="section-label mb-3">Tarife</span>
                    <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}>
                        Alege perioada ta ideală
                    </h2>
                    <p
                        style={{
                            color: 'var(--ct-muted)',
                            fontSize: '14px',
                            maxWidth: '440px',
                            margin: '12px auto 0',
                            fontFamily: "'Lato', sans-serif",
                            lineHeight: 1.7,
                        }}
                    >
                        Prețuri clare, fără surprize — bucură-te de natură în
                        ritmul tău.
                    </p>
                </div>

                <div className="row g-4 justify-content-center">
                    {plans.map((plan) => (
                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={plan.label}
                        >
                            <div
                                style={{
                                    background: plan.highlight
                                        ? 'var(--ct-card-2)'
                                        : 'var(--ct-card)',
                                    border: plan.highlight
                                        ? '1px solid rgba(200,133,42,0.45)'
                                        : '1px solid rgba(200,133,42,0.12)',
                                    borderRadius: '10px',
                                    padding: '36px 28px 32px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    transition:
                                        'border-color 0.3s ease, transform 0.3s ease',
                                }}
                                className="ct-price-card"
                            >
                                {plan.highlight && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-13px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            background: 'var(--ct-orange)',
                                            color: '#fff',
                                            fontSize: '9px',
                                            fontWeight: 700,
                                            letterSpacing: '0.18em',
                                            textTransform: 'uppercase',
                                            padding: '4px 16px',
                                            borderRadius: '20px',
                                            whiteSpace: 'nowrap',
                                            fontFamily: "'Lato', sans-serif",
                                        }}
                                    >
                                        Cea mai bună ofertă
                                    </div>
                                )}

                                {/* Icon */}
                                <div
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        borderRadius: '8px',
                                        background: 'rgba(200,133,42,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '20px',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {plan.icon}
                                </div>

                                {/* Label */}
                                <p
                                    style={{
                                        fontFamily: "'Lato', sans-serif",
                                        fontSize: '10px',
                                        letterSpacing: '0.3em',
                                        textTransform: 'uppercase',
                                        color: 'var(--ct-orange)',
                                        marginBottom: '10px',
                                    }}
                                >
                                    {plan.label}
                                </p>

                                {/* Price */}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        gap: '6px',
                                        marginBottom: '24px',
                                    }}
                                >
                                    {/* <span
                                        style={{
                                            fontFamily:
                                                "'Playfair Display', Georgia, serif",
                                            fontSize:
                                                'clamp(2rem, 4vw, 2.8rem)',
                                            fontWeight: 700,
                                            color: '#fff',
                                            lineHeight: 1,
                                        }}
                                    >
                                        {plan.price}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "'Lato', sans-serif",
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            color: 'var(--ct-muted)',
                                            letterSpacing: '0.06em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {plan.currency}
                                    </span> */}
                                </div>

                                {/* Divider */}
                                <div
                                    style={{
                                        height: '1px',
                                        background: 'rgba(200,133,42,0.12)',
                                        marginBottom: '20px',
                                    }}
                                />

                                {/* Features */}
                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: '0 0 28px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                        flexGrow: 1,
                                    }}
                                >
                                    {plan.features.map((f) => (
                                        <li
                                            key={f}
                                            style={{
                                                fontFamily:
                                                    "'Lato', sans-serif",
                                                fontSize: '13px',
                                                color: 'var(--ct-light-text)',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '10px',
                                                lineHeight: 1.5,
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: 'var(--ct-orange)',
                                                    fontWeight: 700,
                                                    flexShrink: 0,
                                                    marginTop: '1px',
                                                }}
                                            >
                                                ✓
                                            </span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>

                                {/* Button */}
                                {/* <a
                                    href="#contact"
                                    className={
                                        plan.highlight
                                            ? 'btn-ct-primary'
                                            : 'btn-ct-outline'
                                    }
                                    style={{
                                        textAlign: 'center',
                                        width: '100%',
                                        display: 'block',
                                    }}
                                >
                                    Rezervă acum
                                </a> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .ct-price-card:hover {
                    border-color: rgba(200,133,42,0.38) !important;
                    transform: translateY(-3px);
                }
            `}</style>
        </section>
    );
}
