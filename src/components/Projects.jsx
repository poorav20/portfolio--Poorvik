import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { ExternalLink, Github, Folder } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
        >
            <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                        <Folder size={24} />
                    </div>
                    <div className="flex space-x-2">
                        {/* 
            <a href="#" className="text-gray-400 hover:text-gray-700 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <ExternalLink size={20} />
            </a>
            */}
                    </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm font-medium text-blue-600 mb-4">{project.type}</p>

                <div className="mb-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        {project.description.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded border border-gray-200">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Featured Projects</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A selection of projects demonstrating my expertise in software development, data analysis, and cloud technologies.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
