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
                        <Image
                            src={treeIcon}
                            style={{ height: '25px', width: '25px' }}
                            alt="Cabana Trăila"
                        />
                    </span>
                    Cabana Trăila
                </a>

                {/* Phone button — visible only on mobile (collapsed state), hidden on lg+ */}
                <div className="d-flex align-items-center d-lg-none">
                    <a
                        href="tel:+40749942568"
                        className="btn-ct-primary"
                        onClick={() => setOpen(false)}
                    >
                        +40 749 942 568
                    </a>
                </div>

                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                {/* Links + phone button inside collapse (visible on lg+) */}
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

                    {/* Phone button — visible on lg+ after the links */}
                    <div className="d-flex align-items-center">
                        <a
                            href="tel:+40749942568"
                            className="btn-ct-primary"
                            onClick={() => setOpen(false)}
                        >
                            +40 749 942 568
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
