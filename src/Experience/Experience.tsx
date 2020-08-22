import React from 'react';

import ExperienceCompanyPostOffice from './ExperienceCompany/ExperienceCompanyPostOffice';
import ExperienceCompanyHealthUnlockedQA from './ExperienceCompany/ExperienceCompanyHealthUnlockedQA';
import ExperienceCompanyHealthUnlocked from './ExperienceCompany/ExperienceCompanyHealthUnlocked';
import ExperienceCompanySEGA from './ExperienceCompany/ExperienceCompanySEGA';

export default function Experience() {
    return (
        <div className="companiesWrapper">
            <ExperienceCompanyPostOffice />
            <ExperienceCompanyHealthUnlocked />
            <ExperienceCompanyHealthUnlockedQA />
            <ExperienceCompanySEGA />
        </div>
    );
}
