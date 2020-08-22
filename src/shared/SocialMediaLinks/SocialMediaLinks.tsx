import React from 'react';

export default function SocialMediaLinks() {
    const links = [
        {
            id: 'github',
            text: 'GitHub',
            link: 'https://www.github.com/anderslundback',
        },
        {
            id: 'linkedin',
            text: 'LinkedIn',
            link: 'https://www.linkedin.com/in/lundback/',
        },
        {
            id: 'twitter',
            text: 'Twitter',
            link: 'https://twitter.com/anderslundback',
        },
        // {
        //     id: 'youtube',
        //     text: 'YouTube',
        //     link: 'https://www.youtube.com/channel/UC8tv2WkbTh-3G_KB650kM7w',
        // },
    ];

    return (
        <div className="SocialMediaLinks">
            {links.map(({ id, text, link }) => (
                <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`is-${id}`}
                >
                    {text}
                </a>
            ))}
        </div>
    );
}
