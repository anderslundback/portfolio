import React from 'react';

import ExperienceCompanyPostOffice from './ExperienceCompany/ExperienceCompanyPostOffice';
import ExperienceCompanyHealthUnlockedQA from './ExperienceCompany/ExperienceCompanyHealthUnlockedQA';
import ExperienceCompanyHealthUnlocked from './ExperienceCompany/ExperienceCompanyHealthUnlocked';
import ExperienceCompanySEGA from './ExperienceCompany/ExperienceCompanySEGA';
import ExperienceCompanyhealthwords.ai from './ExperienceCompany/ExperienceCompanyhealthwords.ai';
import ExperienceCompanyhealthwords.aiLead from './ExperienceCompany/ExperienceCompanyhealthwords.aiLead';

export default function Experience(): JSX.Element {
    return (
        <div className="companiesWrapper">
            <ExperienceCompanyhealthwords.aiLead />
            <ExperienceCompanyhealthwords.ai />
            <ExperienceCompanyPostOffice />
            <ExperienceCompanyHealthUnlocked />
            <ExperienceCompanyHealthUnlockedQA />
            <ExperienceCompanySEGA />
        </div>
    );
}
