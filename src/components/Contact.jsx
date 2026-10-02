import React from 'react';
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { resumeData } from '../data/resume';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="section-shell contact-inner">
                <div>
                    <p className="eyebrow">03 / Your turn</p>
                    <h2>Have a good<br />problem to solve?</h2>
                    <p className="contact-copy">I’m looking for internship opportunities where I can keep learning, contribute thoughtfully, and build things that matter.</p>
                    <a className="button button-light" href={`mailto:${resumeData.personalInfo.email}`}>Start a conversation <ArrowUpRight size={17} /></a>
                </div>
                <div className="contact-details">
                    <a href={`mailto:${resumeData.personalInfo.email}`}><Mail size={17} />{resumeData.personalInfo.email}<ArrowUpRight size={15} /></a>
                    <a href={`tel:${resumeData.personalInfo.phone}`}><Phone size={17} />{resumeData.personalInfo.phone}<ArrowUpRight size={15} /></a>
                    <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn profile<ArrowUpRight size={15} /></a>
                    <a href={resumeData.personalInfo.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub · poorav20<ArrowUpRight size={15} /></a>
                    <p><MapPin size={17} />{resumeData.personalInfo.location}</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
