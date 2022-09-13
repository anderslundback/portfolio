import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import CaidrLogo from './logos/caidr.jpeg';

export default function ExperienceCompanyCaidrAppLead(): JSX.Element {
    const company = 'CaidrApp';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={CaidrLogo} alt={`${company} logo`} />}
            position="Lead Frontend Engineer"
            period="Jan 2022 - Present"
            stack="React Native, React, Javascript, HTML, CSS."
            details={
                <>
                    <p>
                        Caidr is a health app for smart self-care. medical Caidr
                        tailors trusted advice for you. With With searchable
                        content, and top self-care products, Caidr puts great
                        health in your your hands.
                    </p>
                    <p>
                        Overseeing development of the website and app. Project
                        management, code reviews, SEO and liasing with partners.
                    </p>
                </>
            }
        />
    );
}
