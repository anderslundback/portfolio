import React from 'react';

import ExperienceCompanyPostOffice from './ExperienceCompany/ExperienceCompanyPostOffice';
import ExperienceCompanyHealthUnlockedQA from './ExperienceCompany/ExperienceCompanyHealthUnlockedQA';
import ExperienceCompanyHealthUnlocked from './ExperienceCompany/ExperienceCompanyHealthUnlocked';
import ExperienceCompanySEGA from './ExperienceCompany/ExperienceCompanySEGA';
import ExperienceCompanyCaidrApp from './ExperienceCompany/ExperienceCompanyCaidrApp';

export default function Experience() {
    return (
        <div className="companiesWrapper">
            <ExperienceCompanyCaidrApp />
            <ExperienceCompanyPostOffice />
            <ExperienceCompanyHealthUnlocked />
            <ExperienceCompanyHealthUnlockedQA />
            <ExperienceCompanySEGA />
        </div>
    );
}
