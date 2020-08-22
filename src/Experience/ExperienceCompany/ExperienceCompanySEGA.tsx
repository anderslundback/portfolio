import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import flowableLogo from './logos/sega.jpeg';

export default function ExperienceCompanySEGA() {
    const company = 'SEGA';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={flowableLogo} alt={`${company} logo`} />}
            position="Localisation Quality Tester"
            period="Jan 2016 - Apr 2016"
            stack="Bug tracking & reporting, regression, translation
            Atlassian Suite, TechExcel DevSuite, MS Office"
            details={
                <>
                    <p>
                        Localisation Quality Tester{' '}
                        <a
                            href="https://www.sega.co.uk//"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SEGA
                        </a>
                        , one of the leading interactive entertainment companies in the world, with it's European HQ based in London
                    </p>
                    <p>
                        Quality Assurance and localisation responsible for the Swedish language in the market leading video game Football Manager.
                        Bug tracking and reporting, regression, translation with a multilingual team of testers.
                    </p>
                </>
            }
        />
    );
}
