import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { resumeData } from '../data/resume';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#projects' },
        { name: 'Toolkit', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="site-header">
            <nav className="nav-wrap" aria-label="Main navigation">
                <a href="#home" className="wordmark" onClick={() => setIsOpen(false)}>
                    <span className="wordmark-mark">P.</span>
                    <span>{resumeData.personalInfo.name}</span>
                </a>
                <div className={`nav-links${isOpen ? ' nav-links-open' : ''}`}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                            {link.name}
                        </a>
                    ))}
                    <a className="nav-resume" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">
                        Resume <ArrowUpRight size={15} />
                    </a>
                </div>
                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
