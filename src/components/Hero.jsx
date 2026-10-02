import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resume';
import portrait from '../../Profil.jpeg';

const Hero = () => {
    return (
        <section className="hero section-shell" id="home">
            <div className="hero-grid">
                <Motion.div className="hero-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
                    <p className="eyebrow"><span className="status-dot" /> Final-year B.Tech · AI &amp; ML · Class of 2027</p>
                    <h1>Curious by nature.<br /><span>Engineer by choice.</span></h1>
                    <p className="hero-intro">
                        I’m {resumeData.personalInfo.name.split(' ')[0]}, building ML and NLP pipelines, fairness tools, and agentic workflows for real-world problems.
                    </p>
                    <div className="hero-actions">
                        <a className="button button-dark" href="#projects">Explore my work <ArrowRight size={17} /></a>
                        <a className="text-link" href={`mailto:${resumeData.personalInfo.email}`}>Let’s talk <ArrowUpRight size={16} /></a>
                    </div>
                    <div className="hero-proof" aria-label="Project highlights">
                        <div><strong>14+</strong><span>markets monitored</span></div>
                        <div><strong>80%</strong><span>faster log analysis</span></div>
                        <div><strong>28%</strong><span>better alert accuracy</span></div>
                    </div>
                </Motion.div>
                <Motion.div className="portrait-wrap" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.12 }}>
                    <div className="portrait-frame">
                        <img src={portrait} alt={`${resumeData.personalInfo.name}, computer science student`} />
                        <div className="portrait-stamp"><span>BUILDING</span><strong>what’s next</strong><span>BENGALURU, INDIA · 2026</span></div>
                    </div>
                    <span className="portrait-caption">A little curiosity goes a long way.</span>
                </Motion.div>
            </div>
            <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>
    );
};

export default Hero;
