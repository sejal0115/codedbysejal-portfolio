import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header className="flex items-center sticky top-0 z-50 h-[80px] px-4 py-4 backdrop-blur-2xl border-b bg-background text-foreground border-border">
            <div className="w-full mx-auto flex justify-between items-center px-5 sm:px-20 xl:px-52">
                {/* Logo and Nav */}
                <div className="flex items-center gap-10">
                    <a
                        className="cursor-pointer flex gap-2 items-center"
                        aria-label="Home"
                        onClick={() => scrollTo('hero')}
                    >
                        <img
                            src="/sejal.png"
                            alt="Sejal.dev Logo"
                            width="22"
                            height="22"
                            style={{ color: 'transparent' }}
                        />
                        <div className="text-2xl font-bold gradient-text">Sejal.dev</div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-10">
                        {['about', 'projects', 'contact'].map((section) => (
                            <a
                                key={section}
                                onClick={() => scrollTo(section)}
                                className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Right Side Buttons */}
                <div className="flex items-center gap-3 md:gap-5">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        type="button"
                        aria-label="Toggle theme"
                        className="relative inline-flex items-center justify-center rounded-md border h-10 w-10 bg-gradient-gray transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        type="button"
                        aria-label="Toggle Menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="inline-flex items-center justify-center rounded-md border h-10 w-10 md:hidden bg-gradient-gray transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <nav
                className={`md:hidden absolute top-[80px] left-0 w-full z-40 bg-background border-b border-border px-5 py-4 flex flex-col gap-4 transition-all duration-300 ease-in-out transform ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
                    }`}
            >
                {['about', 'projects', 'contact'].map((section) => (
                    <a
                        key={section}
                        onClick={() => scrollTo(section)}
                        className="cursor-pointer text-base font-medium hover:text-primary transition-colors"
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Navbar;
