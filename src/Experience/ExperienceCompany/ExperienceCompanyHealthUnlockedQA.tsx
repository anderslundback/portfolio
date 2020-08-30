import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import flowableLogo from './logos/healthunlocked.jpeg';

export default function ExperienceCompanyHealthUnlockedQA() {
    const company = 'HealthUnlocked';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={flowableLogo} alt={`${company} logo`} />}
            position="Quality Assurance Technician"
            period="Apr 2016 - May 2017"
            stack="JIRA, BDD, AWS, Docker, Usetrace, Browserstack, Chrome Dev Tools, React Native debugger, git, scrum and kanban."
            details={
                <>
                    <p>
                        Worked on Quality Assurance and realeasting of{' '}
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
                        Initially covering for the QA lead being responsible for
                        quality assurance and releasing to production using git
                        and AWS. Gradually transitioning to a full time
                        developer.
                    </p>
                    <p>
                        Manual and automated testing of new functionality and
                        fixes for both frontend and backend. QA and support of
                        rapidly expanding electronic Holistic Needs Assessment
                        to the majority of trusts in the UK.
                    </p>
                </>
            }
        />
    );
}
