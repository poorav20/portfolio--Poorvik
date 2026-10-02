import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="site-footer section-shell">
            <p>© {new Date().getFullYear()} Poorvik B S <span>·</span> Built with curiosity in Karnataka.</p>
            <a href="#home" aria-label="Back to top">Back to top <ArrowUp size={15} /></a>
        </footer>
    );
};

export default Footer;
