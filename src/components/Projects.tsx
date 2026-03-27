import React from 'react';

const projects = [
    {
        title: 'Project 1',
        description: 'Description for Project 1',
        link: 'https://link-to-project1.com',
    },
    {
        title: 'Project 2',
        description: 'Description for Project 2',
        link: 'https://link-to-project2.com',
    },
    {
        title: 'Project 3',
        description: 'Description for Project 3',
        link: 'https://link-to-project3.com',
    },
    {
        title: 'Project 4',
        description: 'Description for Project 4',
        link: 'https://link-to-project4.com',
    },
];

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
