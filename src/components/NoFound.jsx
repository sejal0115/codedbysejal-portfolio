import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
            <div className="text-center max-w-2xl">
                {/* Image */}
                <img
                    src="/notfound.png"
                    alt="Page not found"
                    className="mx-auto w-full max-w-md h-auto object-contain mb-6"
                />

                {/* Message */}
                <h2 className="text-xl font-semibold text-muted-foreground mb-8">
                    This page could not be found.
                </h2>

                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 shadow-xl cursor-pointer gap-2"
                >
                    Go back home
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
