'use client';
import treeIcon from '../src/assets/tree.png';
import firma from '../src/assets/FIRMA_LOGO.png';
import Image from 'next/image';
import Link from 'next/link';
import MapEmbed from './MapEmbed';

const quickLinks = ['Despre', 'Galerie', 'Facilități', 'Review-uri', 'Tarife'];
const supportLinks = [
    'FAQ',
    'Cancellation Policy',
    'Terms of Service',
    'Privacy Policy',
];
const contact = [
    {
        icon: 'bi-geo-alt',
        text: 'Jud. Arad, Sat Botfei, 1km de la iesire prima cabana cu pescarie',
        link: 'https://www.google.com/maps?ll=46.567399,22.083997&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=6881615167545825205',
    },
    {
        icon: 'bi-telephone',
        text: '+40 749 942 568',
        link: 'tel:+40749942568',
    },
    {
        icon: 'bi-envelope',
        text: 'cabanalatraila@gmail.com',
        link: 'mailto:cabanalatraila@gmail.com',
    },
];

export default function Footer() {
    return (
        <footer className="ct-footer pt-5 pb-4">
            <div className="container">
                <div className="row g-4 mb-5">
                    {/* Brand */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="d-flex align-items-center gap-2 mb-3 fst-italic">
                            <span>
                                {/*🌲*/}
                                <Image
                                    src={treeIcon}
                                    style={{ height: '25px', width: '25px' }}
                                    alt="Cabana Trăila"
                                />
                            </span>
                            <span
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '16px',
                                    color: 'var(--ct-text)',
                                    fontWeight: 500,
                                }}
                            >
                                Cabana Trăila
                            </span>
                        </div>
                        <p
                            style={{
                                fontSize: '13px',
                                color: 'rgba(200,169,122,0.55)',
                                lineHeight: 1.75,
                                maxWidth: '220px',
                            }}
                        >
                            O retragere rustică concepută pentru cei care caută
                            alinare și conexiune cu natura fără a sacrifica
                            confortul.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-sm-3 col-lg-2">
                        <span className="ct-footer-title">Link-uri rapide</span>
                        {quickLinks.map((l) => (
                            <a
                                key={l}
                                href={`#${l.toLowerCase()}`}
                                className="ct-footer-link"
                            >
                                {l}
                            </a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="col-6 col-sm-3 col-lg-2">
                        <span className="ct-footer-title">Contact</span>
                        {contact.map((c) => (
                            <div key={c.text} className="d-flex gap-2 mb-3">
                                <i
                                    className={`bi ${c.icon} flex-shrink-0`}
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--ct-muted)',
                                        marginTop: '2px',
                                    }}
                                />
                                <a
                                    href={c.link}
                                    style={{
                                        fontSize: '12px',
                                        color: 'rgba(200,169,122,0.55)',
                                        lineHeight: 1.6,
                                        textDecoration: 'none',
                                    }}
                                >
                                    {c.text}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Harta */}
                    <div className="col-12 col-lg-4">
                        <span className="ct-footer-title">Hartă</span>
                        <MapEmbed />
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="d-flex flex-wrap justify-content-between align-items-center gap-3 pt-4"
                    style={{ borderTop: '1px solid rgba(200,133,42,0.1)' }}
                >
                    <p
                        className="mb-0"
                        style={{
                            fontSize: '12px',
                            color: 'rgba(200,169,122,0.4)',
                        }}
                    >
                        © 2026 Cabana Trăila. Toate drepturile rezervate.
                    </p>
                    <div className="d-flex justify-content-end">
                        {/* {[
                            { icon: 'bi-twitter-x', href: '#' },
                            { icon: 'bi-facebook', href: '#' },
                            { icon: 'bi-instagram', href: '#' },
                        ].map((s) => (
                            <a
                                key={s.icon}
                                href={s.href}
                                className="ct-social-btn"
                                aria-label={s.icon}
                            >
                                <i className={`bi ${s.icon}`} />
                            </a>
                        ))} */}
                        <Link
                            className="d-flex justify-content-end"
                            href="https://kraftdigital.ro"
                        >
                            <Image
                                src={firma}
                                style={{ width: '35%', height: 'auto' }}
                                alt="Kraft Digital"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
