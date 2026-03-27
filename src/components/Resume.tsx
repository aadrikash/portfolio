import React from 'react';

const Resume: React.FC = () => {
    return (
        <div>
            <h1>Resume Preview</h1>
            <h2>Name: Your Name</h2>
            <h3>Contact Information</h3>
            <p>Email: example@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <h3>Education</h3>
            <p>Degree: Your Degree</p>
            <p>Institution: Your Institution</p>
            <h3>Experience</h3>
            <p>Job Title - Company (Year - Year)</p>
            <p>Job Description and accomplishments...</p>
            <h3>Skills</h3>
            <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
            </ul>
        </div>
    );
};

export default Resume;
