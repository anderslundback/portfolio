import React from 'react';
import ExperienceCompany from './ExperienceCompany';

export default function ExperienceCompanyhealthwordsai(): JSX.Element {
    const company = 'healthwords.ai';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src="healthwordsai.svg" alt={`${company} logo`} />}
            position="Senior Software Engineer"
            period="Jan 2021 - Present"
            stack="React Native, Javascript, HTML, CSS."
            details={
                <>
                    <p>
                        Healthwords is a health app for smart self-care. Created
                        by a Created by a team of pharmacists, family doctors,
                        and leading medical experts, healthwords.ai tailors
                        trusted advice for you. With searchable content, and top
                        self-care healthwords.ai puts great health in your
                        hands.
                    </p>
                    <p>
                        I'm mainly responsible for the development of our
                        Android and iOS app, built with React Native.
                    </p>
                </>
            }
        />
    );
}
