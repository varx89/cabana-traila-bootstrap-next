'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFishFins } from '@fortawesome/free-solid-svg-icons';

const stats = [
    { icon: '📐', value: 'Terasă mare', label: '' },
    { icon: '🛏', value: '6 camere', label: '' },
    { icon: '🛁', value: '2 Băi', label: '' },
    { icon: '🍖', value: 'Loc de grătar', label: '' },
    { icon: '🐟', value: 'Pescărie', label: '' },
    { icon: '🛝', value: 'Loc de joacă', label: '' },
];

export default function Experience() {
    return (
        <section id="despre" className="ct-experience py-5 py-lg-6">
            <div className="container py-4">
                <div className="row align-items-center g-5">
                    {/* Image col */}
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <div
                                className="rounded-3 overflow-hidden"
                                style={{ aspectRatio: '4/3' }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=900&q=80"
                                    alt="Cabin interior with stone fireplace"
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                            {/* Rating badge */}
                            {/* <div className="ct-rating-badge">
                                <p
                                    className="mb-1"
                                    style={{
                                        fontSize: '10px',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        color: 'var(--ct-muted)',
                                    }}
                                >
                                    Guest Rating
                                </p>
                                <p
                                    className="mb-0 fw-semibold"
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: '22px',
                                        color: '#fff',
                                    }}
                                >
                                    4.9/5.0
                                </p>
                            </div> */}
                        </div>
                    </div>

                    {/* Text col */}
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <span className="section-label mb-3">
                            Experiență de neuitat
                        </span>

                        <h2
                            className="mb-4"
                            style={{
                                fontSize: 'clamp(28px, 4vw, 48px)',
                                lineHeight: 1.15,
                            }}
                        >
                            O locație de poveste în adâncul pădurilor
                        </h2>

                        <p
                            style={{
                                fontSize: '14px',
                                lineHeight: 1.85,
                                color: 'rgba(232,213,180,0.7)',
                            }}
                        >
                            Cabana Trăila este mai mult decât un simplu loc de
                            cazare - este o imersiune în ritmul senin al
                            naturii. Construită din lemn și piatră provenite din
                            surse locale, cabana noastră se integrează perfect
                            în împrejurimile forestiere.
                        </p>
                        <p
                            className="mt-3"
                            style={{
                                fontSize: '14px',
                                lineHeight: 1.85,
                                color: 'rgba(232,213,180,0.7)',
                            }}
                        >
                            {/* Treziți-vă cu sunetul cântecului păsărilor,
                            savurați-vă cafeaua de dimineață pe terasa
                            grandioasă în timp ce ceața se risipește printre
                            stejari și încheiați-vă serile împărtășind povești
                            în jurul șemineului. */}
                            Treziți-vă cu sunetul cântecului păsărilor,
                            savurați-vă cafeaua de dimineață pe terasa
                            grandioasă în timp ce ceața se risipește printre
                            stejari. Pentru momente de relaxare deplină, vă
                            puteți petrece timpul la{' '}
                            <span className="fst-italic fw-bolder text-danger">
                                <FontAwesomeIcon icon={faFishFins} />
                                pescăria proprie
                            </span>
                            , unde pasionații se pot bucura de liniștea apei și
                            pot prinde pește proaspăt. Încheiați-vă apoi serile
                            regăsindu-vă liniștea și împărtășind povești în
                            jurul șemineului.”
                        </p>

                        {/* Stats */}
                        <div className="ct-stats-box mt-4">
                            <div className="row row-cols-2 g-3">
                                {stats.map((s) => (
                                    <div className="col" key={s.value}>
                                        <div className="d-flex align-items-center gap-2 mb-1">
                                            <span style={{ fontSize: '14px' }}>
                                                {s.icon}
                                            </span>
                                            <span
                                                style={{
                                                    fontFamily:
                                                        "'Playfair Display', serif",
                                                    fontSize: '15px',
                                                    color: '#fff',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {s.value}
                                            </span>
                                        </div>
                                        <p
                                            className="mb-0 ps-4"
                                            style={{
                                                fontSize: '11px',
                                                color: 'var(--ct-muted)',
                                            }}
                                        >
                                            {s.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* <a
                            href="#book"
                            className="d-inline-flex align-items-center gap-2 mt-4"
                            style={{
                                fontSize: '13px',
                                color: 'var(--ct-orange)',
                                textDecoration: 'none',
                                borderBottom: '1px solid rgba(200,133,42,0.3)',
                                paddingBottom: '2px',
                                letterSpacing: '0.05em',
                            }}
                        >
                            Explore the cabin{' '}
                            <i className="bi bi-arrow-right" />
                        </a> */}
                    </div>
                </div>
            </div>

            <style>{`.py-lg-6 { padding-top: 5rem !important; padding-bottom: 5rem !important; }`}</style>
        </section>
    );
}
