import React from 'react';

interface ExperienceCompanyProps {
    company: string;
    logo: JSX.Element;
    position: string;
    period: string;
    stack: string;
    details: JSX.Element;
    achievements?: JSX.Element;
}

const ExperienceCompany: React.FC<ExperienceCompanyProps> = ({
    company,
    logo,
    position,
    period,
    stack,
    details,
    achievements,
}) => {
    return (
        <div className="ExperienceCompany" data-testid="ExperienceCompany">
            <div className="logoWrapper">{logo}</div>
            <div className="details">
                <div className="position">
                    <div>
                        <div className="is-color-cyan">Company</div>
                        <h6 data-testid="ExperienceCompany-title">{company}</h6>
                    </div>
                    <div>
                        <div className="is-color-cyan">Position</div>
                        <h6>{position}</h6>
                    </div>
                    <div>
                        <div className="is-color-cyan">Period</div>
                        <h6>{period}</h6>
                    </div>
                </div>
                <div>
                    <div className="is-color-cyan">Stack</div>
                    <div>{stack}</div>
                </div>
                <div>
                    <div className="is-color-cyan">Details</div>
                    {details}
                </div>
                {achievements && (
                    <div>
                        <div className="is-color-cyan">Achievements</div>
                        {achievements}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCompany;
