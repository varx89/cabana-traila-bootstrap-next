'use client';

const amenities = [
    {
        icon: '🍳',
        title: 'Bucătărie complet utilată',
        desc: 'Dotată cu electrocasnice și veselă.',
    },
    {
        icon: '🛏️',
        title: 'Dormitoare confortabile',
        desc: 'Paturi king-size cu saltele, lenjerie de calitate și perne extra pentru un somn odihnitor.',
    },
    {
        icon: '📶',
        title: 'Wi-Fi rapid',
        desc: 'Internet de mare viteză, ideal pentru muncă remote, streaming și gaming.',
    },
    {
        icon: '🚿',
        title: 'Băi moderne',
        desc: 'Duș spațios, prosoape curate și produse de igienă gratuite.',
    },
    {
        icon: '❄️',
        title: 'Aer condiționat',
        desc: 'Sistem de climatizare pentru confort optim pe tot parcursul anului.',
    },
    {
        icon: '🚗',
        title: 'Parcare gratuită',
        desc: 'Loc de parcare privat disponibil fără costuri suplimentare.',
    },
    {
        icon: '📺',
        title: 'TV',
        desc: 'Televizor cu acces la cablu TV.',
    },
    {
        icon: '🌳',
        title: 'Terasă',
        desc: 'Spațiu exterior pentru relaxare, cafea sau mese în aer liber.',
    },
    {
        icon: '🔥',
        title: 'Încălzire pe lemne și AC',
        desc: 'Sistem eficient de încălzire pentru zilele reci.',
    },
    {
        icon: '🧺',
        title: 'Mașină de spălat',
        desc: 'Disponibilă pentru utilizare, inclusiv detergent.',
    },
    {
        icon: '🐟',
        title: 'Pescărie',
        desc: 'Se poate pescui, mai multe tipuri de pește.',
    },
    {
        icon: '☕',
        title: 'Colț de cafea',
        desc: 'Espressor și selecție de cafea pentru dimineți perfecte.',
    },
];

export default function Amenities() {
    return (
        <section id="facilități" className="ct-amenities py-5">
            <div className="container py-4">
                {/* Header */}
                <div className="text-center mb-5">
                    <span className="section-label mb-3">Facilități</span>
                    <h2
                        className="mb-3"
                        style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}
                    >
                        Tot ceea ce ai nevoie
                    </h2>
                    <p
                        className="mx-auto mb-0"
                        style={{
                            fontSize: '14px',
                            color: 'rgba(232,213,180,0.6)',
                            maxWidth: '440px',
                            lineHeight: 1.7,
                        }}
                    >
                        Facilități pentru a oferii comfortabilitate, relaxare și
                        fară compromisuri.
                    </p>
                </div>

                {/* Grid — col-6 on xs = 2 per row on mobile; col-md-4 = 3 per row on md+ */}
                <div className="row g-3">
                    {amenities.map((a) => (
                        <div className="col-6 col-md-4" key={a.title}>
                            <div className="ct-amenity-card">
                                <div className="ct-icon-wrap">{a.icon}</div>
                                <h3
                                    className="mb-2"
                                    style={{
                                        fontSize: '16px',
                                        fontWeight: 600,
                                    }}
                                >
                                    {a.title}
                                </h3>
                                <p
                                    className="mb-0"
                                    style={{
                                        fontSize: '13px',
                                        color: 'rgba(232,213,180,0.6)',
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {a.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
