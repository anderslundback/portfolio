interface Role {
    id: string;
    title: string;
    years: string;
    description: string;
    skills?: string;
  }
  
  export interface Job {
    company: string;
    location: string;
    roles: Role[];
  }

export const jobs: Job[] = [
    {
    company: "healthwords.ai",
    location: "London, UK",
    roles: [
        {
          id: "0",
          title: "Chief Product Officer",
          years: "2023 - Present",
          description:
            "Leading a product team of 10, planning and leading the execution of the roadmap. End to end responsibility of the Front End of the web app (React, TypeScript, next.js) and cross platform mobile app (React Native). Led on SEO, security and project management.",
          skills: "stakeholder management, team leadership, Product Development",
        },
        {
            id: "1",
            title: "Lead Front End Engineer",
            years: "2022 - 2023",
            description: `Co-leading the product development team, defining the road map, assigning, reviewing and deploying work, and taking over responsibilities of the previous COO. End to end management of web app, iOS and Android apps.`,
        },
        {
            id: "2",
            title: "Senior Software Engineer",
            years: "2021 - 2022",
            description: "React Native development of our health tech app, working closely with the CTO. Majority of the front end development for a substantial redesign of the app. Involved in the full software lifecycle from idea to shipping to production on Android and iOS, modernising the codebase using functional components written in TypeScript and dramatically increasing the test coverage.",
        }
    ]},
    {
        company: "Post Office",
        location: "London, UK",
        roles: [
            {
                id: "3",
                title: "Full-stack Mobile Engineer",
                years: "2018 - 2021",
                description: "Part of the first in-house development team with a focus on the mobile and webspace. Primarily working on Post Office Travel which at the time had 620k users and 4.6-star reviews across both iOS and Android stores. Front end lead for the Post Office branch app used in the 11,600-wide post office branch network. Core developer of the in-house push notification system, saving £50k every year. Delivered MVPs in AR, Alexa Skill and face recognition software.",
            }
        ]
    },
    {
        company: "HealthUnlocked",
        location: "London, UK",
        roles: [
            {
                id: "4",
                title: "Software Engineer",
                years: "2016 - 2018",
                description: "HealthUnlocked is the largest social network for health. Front End development of their website and app built in React.js and React Native.",
            }
        ]
    }
  ];
