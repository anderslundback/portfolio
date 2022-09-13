import React from 'react';

import ExperienceCompanyPostOffice from './ExperienceCompany/ExperienceCompanyPostOffice';
import ExperienceCompanyHealthUnlockedQA from './ExperienceCompany/ExperienceCompanyHealthUnlockedQA';
import ExperienceCompanyHealthUnlocked from './ExperienceCompany/ExperienceCompanyHealthUnlocked';
import ExperienceCompanySEGA from './ExperienceCompany/ExperienceCompanySEGA';
import ExperienceCompanyCaidrApp from './ExperienceCompany/ExperienceCompanyCaidrApp';
import ExperienceCompanyCaidrAppLead from './ExperienceCompany/ExperienceCompanyCaidrAppLead';

export default function Experience(): JSX.Element {
    return (
        <div className="companiesWrapper">
            <ExperienceCompanyCaidrAppLead />
            <ExperienceCompanyCaidrApp />
            <ExperienceCompanyPostOffice />
            <ExperienceCompanyHealthUnlocked />
            <ExperienceCompanyHealthUnlockedQA />
            <ExperienceCompanySEGA />
        </div>
    );
}
