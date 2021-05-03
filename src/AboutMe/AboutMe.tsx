import React from 'react';

export default function AboutMe() {
    return (
        <div className="is-text" data-testid="AboutMe">
            <p>
                I'm a{' '}
                <label className="is-color-pink">
                    Senior Software Engineer with 5 years of commercial programming experience,
                </label>
                &nbsp;currently based in London. I’m a highly proficient Javascript / React / React Native developer, interested in standards, efficiency, automated testing and UI/UX.
            </p>
            <p>
                <label className="is-color-yellow">
                    An enthusiastic self-starter, I view myself as a highly  organised, responsible and committed worker.
                </label>
                &nbsp;In both my professional and personal life, I value  intelligent communication, mutual respect and teamwork as the key markers of success.
            </p>
            <p>
                A keen technology enthusiast,&nbsp;
                <label className="is-color-yellow">
                    I welcome new and challenging opportunities working as part of an Agile team.
                </label>
                &nbsp;I enjoy contributing  my working knowledge to projects and continuously seek to learn more as I progress my career.
            </p>
            <p>
                As a developer, I've worked for both large corporations as well as smaller startups.
                I’m dedicated to&nbsp;
                <label className="is-color-yellow">
                    constantly  improving and lending my skills to teach others
                </label>{' '}
                along the way wherever possible.
            </p>

            <p>
                In my spare time, I enjoy playing chess, travelling and teaching people how to code. I often help new people break into the CS industry at the Codecademy London meetup, which has now grown to over 8,000 members.

            </p>
        </div>
    );
}
