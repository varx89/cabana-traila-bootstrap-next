'use client';
import { useState, useEffect } from 'react';
import treeIcon from '../src/assets/tree.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', fn);
        return () => window.removeEventListener('scroll', fn);
    }, []);

    const links = ['Despre', 'Galerie', 'Facilități', 'Review-uri', 'Tarife'];

    return (
        <nav
            className={`ct-navbar navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="container">
                {/* Brand */}
                <a
                    className="navbar-brand d-flex align-items-center gap-2 fs-5 fst-italic"
                    href="#"
                >
                    <span>
                        {/*🌲*/}
                        <Image
                            src={treeIcon}
                            style={{ height: '25px', width: '25px' }}
                            alt="Cabana Trăila"
                        />
                    </span>
                    Cabana Trăila
                </a>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Links */}
                <div
                    className={`collapse navbar-collapse ${open ? 'show' : ''}`}
                >
                    <ul className="navbar-nav mx-auto gap-lg-4 fw-bold fst-italic">
                        {links.map((l) => (
                            <li className="nav-item" key={l}>
                                <a
                                    className="nav-link"
                                    href={`#${l.toLowerCase()}`}
                                    onClick={() => setOpen(false)}
                                >
                                    <FontAwesomeIcon
                                        icon={faCanadianMapleLeaf}
                                    />
                                    {l}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex align-items-center mt-3 mt-lg-0">
                        <a
                            href="tel:+40721335079"
                            className="btn-ct-primary"
                            onClick={() => setOpen(false)}
                        >
                            +40 721 335 079
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
