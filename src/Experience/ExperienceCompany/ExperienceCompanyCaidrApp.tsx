import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import CaidrLogo from './logos/caidr.jpeg';

export default function ExperienceCompanyCaidrApp() {
    const company = 'CaidrApp';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={CaidrLogo} alt={`${company} logo`} />}
            position="Senior Software Engineer"
            period="Jan 2021 - Present"
            stack="React Native, Javascript, HTML, CSS."
            details={
                <>
                    <p>
                        Caidr is a health app for smart self-care.
                        Created by a team of pharmacists, family doctors, and leading medical experts,
                        Caidr tailors trusted advice for you. With searchable content, and top self-care products,
                        Caidr puts great health in your hands.
                    </p>
                    <p>
                        I'm mainly responsible for the development of our Android and iOS app, built with React Native.
                    </p>
                </>
            }
        />
    );
}
