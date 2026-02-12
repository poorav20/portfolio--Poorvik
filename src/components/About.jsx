import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { Code, Database, Brain, Cloud, Terminal, Cpu } from 'lucide-react';

const SkillCard = ({ title, skills, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
    >
        <div className="flex items-center mb-4">
            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 mr-4">
                <Icon size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-100">
                    {skill}
                </span>
            ))}
        </div>
    </motion.div>
);

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">About Me & Skills</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        I'm a passionate engineering student with a strong foundation in computer science principles and modern technologies.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <SkillCard
                        title="Programming Languages"
                        skills={resumeData.skills.programming}
                        icon={Code}
                    />
                    <SkillCard
                        title="Algorithms & Data Structures"
                        skills={resumeData.skills.algorithms}
                        icon={Brain}
                    />
                    <SkillCard
                        title="Data Analysis"
                        skills={resumeData.skills.dataAnalysis}
                        icon={Database}
                    />
                    <SkillCard
                        title="Big Data"
                        skills={resumeData.skills.bigData}
                        icon={Server}
                    />
                    <SkillCard
                        title="Cloud Computing"
                        skills={resumeData.skills.cloud}
                        icon={Cloud}
                    />
                    <SkillCard
                        title="Tools & Development"
                        skills={resumeData.skills.development}
                        icon={Terminal}
                    />
                </div>

                {/* Education Highlight */}
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Education</h3>
                    <div className="space-y-6 max-w-3xl mx-auto">
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">{edu.institution}</h4>
                                    <p className="text-gray-600">{edu.degree}</p>
                                </div>
                                <div className="text-left md:text-right mt-2 md:mt-0">
                                    <span className="block text-blue-600 font-semibold">{edu.year || edu.score}</span>
                                    {edu.year && <span className="text-sm text-gray-500">{edu.score}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
// Add missing icon definition locally if needed or import
import { Server } from 'lucide-react';

export default About;
