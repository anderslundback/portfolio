import React from 'react';
import ExperienceCompany from './ExperienceCompany';
import PostOfficeLogo from './logos/postoffice.png';

export default function ExperienceCompanyPostOffice() {
    const company = 'Post Office';
    return (
        <ExperienceCompany
            company={company}
            logo={<img src={PostOfficeLogo} alt={`${company} logo`} />}
            position="Full stack mobile developer"
            period="Mar 2018 - Jan 2021"
            stack="React Native, Javascript, HTML, CSS, Outsystems."
            details={
                <>
                    <p>
                        Part of the first in-house Digital & Innovation team focusing on app development.
                        Primarily working on the Post Office Travel app,
                        which currently has over half a million users and 4.7 star reviews across both iOS and Android stores.
                    </p>
                    <p>
                        The Post Office with its 11,600 branches nationwide is going through a digital revolution.
                        I'm part of the Customer Hub project,
                        which facilitates a single customer experience.
                        It enables customers to access accounts and services wherever and
                        whenever they need to, in a single journey,
                        eliminating the disjointed journeys associated with multiple partners.
                    </p>
                </>
            }
        />
    );
}
