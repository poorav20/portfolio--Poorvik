import React from 'react';
import { motion as Motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <>
        <section id="about" className="about-section section-shell">
            <div className="section-heading">
                <p className="eyebrow">01 / A little about me</p>
                <h2>Good work starts<br />with good questions.</h2>
            </div>
            <div className="about-grid">
                    <Motion.div className="about-copy" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <p className="about-lead">I build applied AI systems that are useful, testable, and grounded in real workflows.</p>
                        <p>As a final-year AI &amp; ML student at Dayananda Sagar University, I’ve worked across ensemble modeling, NLP, agentic automation, and fairness evaluation. I’m especially interested in making prototypes dependable: validating live data, testing model behavior, and connecting the pieces into an end-to-end product.</p>
                        <a className="text-link" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">View my resume <span>↗</span></a>
                    </Motion.div>
                <div className="education-block">
                    <p className="eyebrow">The learning so far</p>
                    {resumeData.education.map((edu) => (
                        <div className="education-row" key={edu.institution}>
                            <span className="education-year">{edu.year || 'Completed'}</span>
                            <div><h3>{edu.institution}</h3><p>{edu.degree} <span>{edu.score}</span></p></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
            <section id="skills" className="skills-section">
                <div className="section-shell">
                    <div className="skills-heading"><p className="eyebrow">A practical toolkit</p><h2>Tools I reach for</h2></div>
                    <div className="skills-list">
                        {Object.entries(resumeData.skills).map(([category, skills]) => (
                            <div className="skill-group" key={category}>
                                <h3>{category}</h3>
                                <p>{skills.map((skill) => <span key={skill}>{skill}</span>)}</p>
                            </div>
                        ))}
                    </div>
                    <div className="resume-extras">
                        <div>
                            <p className="eyebrow">Milestones</p>
                            <ul className="achievement-list">
                                {resumeData.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                            </ul>
                            <p className="certification-line"><span>Certification</span>{resumeData.certifications.join(' · ')}</p>
                        </div>
                        <div>
                            <p className="eyebrow">Relevant coursework</p>
                            <div className="coursework-list">
                                {resumeData.coursework.map((course) => <span key={course}>{course}</span>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
