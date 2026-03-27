import React from 'react';

const Certifications = () => {
    const certifications = [
        { name: 'Certified Kubernetes Administrator (CKA)', date: '2021-10' },
        { name: 'AWS Certified Solutions Architect', date: '2021-05' },
        { name: 'Google Cloud Professional Data Engineer', date: '2021-11' },
        { name: 'Microsoft Certified: Azure Developer Associate', date: '2022-01' },
        { name: 'Scrum Master Certified (SMC)', date: '2020-09' }
    ];

    return (
        <div>
            <h2>Certifications</h2>
            <ul>
                {certifications.map(cert => (
                    <li key={cert.name}>{cert.name} - {cert.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default Certifications;
