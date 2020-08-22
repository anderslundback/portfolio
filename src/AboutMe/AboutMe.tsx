import React from 'react';

export default function AboutMe() {
    return (
        <div className="is-text" data-testid="AboutMe">
            <p>
                I'm a{' '}
                <label className="is-color-pink">
                    Software Engineer with 4 years of commercial programming experience, currently based in London.
                </label>
                &nbsp; I’m a highly proficient Javascript / React / React Native
                developer, interested in standards, efficiency, automated
                testing and UI/UX.
            </p>
            <p>
                <label className="is-color-yellow">
                    I’m a very organized, responsible and committed person.
                </label>
                &nbsp; I consider communication, respect and teamwork as the
                keys to both personal and professional success.
            </p>
            <p>
                Technology enthusiast,&nbsp;
                <label className="is-color-yellow">
                    I aim to face new and motivating challenges
                </label>
                &nbsp; working as part of an Agile team, contributing with my
                knowledge and continuously learning from my environment.
            </p>
            <p>
                As a developer I've worked both in large coorporations and startups. I’m focused on&nbsp;
                <label className="is-color-yellow">
                    improving my skills and teaching others
                </label>{' '}
                along the way.
            </p>

            <p>
                In my spare time I enjoy playing chess, travelling and teaching people how to code.
                I often help people break into the CS industry at the Codecademy London meetup which has now grown to over 8000 members!
            </p>
        </div>
    );
}
