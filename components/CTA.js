'use client';
import { useState } from 'react';

export default function CTA() {
    const [email, setEmail] = useState('');

    return (
        <section
            id="preturi"
            className="ct-cta py-5"
            style={{ position: 'relative', overflow: 'hidden' }}
        >
            {/* Radial glow */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'radial-gradient(ellipse at center, rgba(200,133,42,0.07) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div
                className="container py-5 text-center"
                style={{ position: 'relative', zIndex: 1 }}
            >
                <div className="mx-auto" style={{ maxWidth: '600px' }}>
                    <h2
                        className="mb-3"
                        style={{
                            fontSize: 'clamp(30px, 5vw, 56px)',
                            lineHeight: 1.1,
                        }}
                    >
                        Ready to Disconnect?
                    </h2>
                    <p
                        className="mb-5"
                        style={{
                            fontSize: '14px',
                            color: 'rgba(232,213,180,0.65)',
                            lineHeight: 1.75,
                        }}
                    >
                        Secure your dates now. Cabana Traila books up months in
                        advance.
                    </p>

                    <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                        <input
                            type="email"
                            className="ct-email-input"
                            placeholder="Enter your email for 10% off your first stay"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="btn-ct-primary flex-shrink-0">
                            Subscribe &amp; Book
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
