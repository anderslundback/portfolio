import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import HealthUnlockedLogo from './logos/healthunlocked.jpeg';

export default function ExperienceCompanyHealthUnlocked() {
    const company = 'HealthUnlocked';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={HealthUnlockedLogo} alt={`${company} logo`} />}
            position="Software developer"
            period="May 2017 - Feb 2018"
            stack="ReactJS, React Native, Redux, HTML5, CSS3, JS ES6, AWS S3, CloudWatch, EC2, ECS, Elastic Search."
            details={
                <>
                    <p>
                        Software developer at{' '}
                        <a
                            href="https://healthunlocked.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            HealthUnlocked
                        </a>
                        , the worlds largest social network for health.
                    </p>
                    <p>
                        Development of the largest social network for health and the electronic Holistic Needs Assessment used in hospitals throughout the UK. I was part of an agile development team using cutting edge technology to power a fleet of microservices hosted in the cloud on Amazon Web Services.
                    </p>
                    <p>
                        Primarily javascript based front-end development. Autonomous workflow powered by terraform releasing multiple times a day to production.
                    </p>
                </>
            }
        />
    );
}
