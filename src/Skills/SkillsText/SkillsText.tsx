import React from 'react';

export default function SkillsText() {
    return (
        <div className="SkillsText is-text">
            <p>
                <label
                    className="h6 is-color-pink"
                    data-testid="SkillsText-title"
                >
                    I love JavaScript!
                </label>
                <br />
                I've been using it commercially for four years. This includes back end development using node.js and front end libraries such as <label className="is-color-green">React</label> and <label className="is-color-green">React Native.</label>
            </p>
            <p>
                I have a background in the video games industry with a CS degree focused on game development. I have also travelled around Europe organising competetions in video games. These have been on a large scale drawing tens and thousands of visitors and up to 200k watching online.
            </p>
            <p>
                I really enjoy playing with{' '}
                <label className="is-color-yellow">UI/UX</label>&nbsp; too! I
                strongly believe that things should work smoothly, but they
                should look great too.
            </p>
            <p>
                I'm a&nbsp;
                <label className="is-color-yellow">testing advocate</label> at
                any level (unit, component, functional, integration... even
                screenshot-based!)
            </p>
            <p>
                And, of course, the{' '}
                <label className="is-color-yellow">cloud</label>!&nbsp; I've primarily worked with AWS, currently persuing a certification.
            </p>
        </div>
    );
}
