import React from 'react';
import { motion as Motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            viewport={{ once: true }}
            className={`project-card${index === 0 ? ' project-featured' : ''}`}
        >
            <div className="project-card-top"><span>0{index + 1} / SELECTED WORK</span><ArrowUpRight size={17} /></div>
            <p className="project-type">{project.type}</p>
            <h3>{project.title}</h3>
            <ul className="project-points">
                {project.description.slice(0, index === 0 ? 3 : 2).map((desc) => (
                    <li key={desc}>{desc}</li>
                ))}
            </ul>
            <div className="project-tags">
                    {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
            </div>
        </Motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-shell">
                <div className="projects-heading">
                    <div><p className="eyebrow">02 / Things I’ve built</p><h2>Small ideas.<br />Real-world impact.</h2></div>
                    <p>Experiments in applied AI, model fairness, workflow automation, and data at scale.</p>
                </div>
                <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
