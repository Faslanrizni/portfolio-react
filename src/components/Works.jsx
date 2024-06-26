import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../constants';

const Works = () => {
    return (
        <div className="w-full h-auto py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" id="work">
            <div className="container">
                <h1 className="text-3xl font-bold mb-8">Projects</h1>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 bg-[#121213] m-5 flex flex-wrap justify-center">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-item-outer"
                            style={{ backgroundImage: `url(${project.backgroundImage})` }}
                        >
                            <div className="project-title bg-black bg-opacity-50 text-white p-2 absolute bottom-0 w-full text-center">
                                {project.title}
                            </div>
                            <div className="top-element elementProject">
                                <div className="data-wrapper">
                                    <p className="text-white text-lg font-medium">{project.description}</p>
                                    <div className="w-full h-16 flex items-center justify-center">
                                        <ul className="flex list-none m-0 p-0">
                                            <li className="mr-4 text-white">
                                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                                    <FaGithub />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-element elementProject"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;
