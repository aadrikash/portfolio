import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>About Me</h1>
            <img src="path_to_profile_picture" alt="Profile" style={{ borderRadius: '50%', width: '150px', height: '150px' }} />
            <p>"Your bio text goes here, sharing a little about yourself and your journey."</p>
            <h2>Quick Stats</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li><strong>Education:</strong> Your Education Details</li>
                <li><strong>Graduation Year:</strong> 2022</li>
                <li><strong>Location:</strong> Your Location</li>
            </ul>
            <h2>Technical Skills</h2>
            <div>
                <h3>Languages</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>Python</li>
                </ul>
                <h3>AI/ML</h3>
                <ul>
                    <li>TensorFlow</li>
                    <li>PyTorch</li>
                </ul>
                <h3>Data Analysis</h3>
                <ul>
                    <li>Pandas</li>
                    <li>NumPy</li>
                </ul>
                <h3>Computer Vision</h3>
                <ul>
                    <li>OpenCV</li>
                    <li>scikit-image</li>
                </ul>
                <h3>RAG & LLMs</h3>
                <ul>
                    <li>Hugging Face Transformers</li>
                    <li>LangChain</li>
                </ul>
                <h3>Cloud</h3>
                <ul>
                    <li>AWS</li>
                    <li>Azure</li>
                </ul>
                <h3>Automation</h3>
                <ul>
                    <li>GitHub Actions</li>
                    <li>Python Scripts</li>
                </ul>
                <h3>Development</h3>
                <ul>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </div>
    );
};

export default About;