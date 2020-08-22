import Home from '../../Home/Home';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Experience from '../../Experience/Experience';

const routesList: Route[] = [
    { id: 'home', to: '/', text: 'Home', component: Home, isExternal: false },
    {
        id: 'about-me',
        to: '/about-me',
        text: 'About me',
        component: AboutMe,
        isExternal: false,
    },
    {
        id: 'skills',
        to: '/skills',
        text: 'Skills',
        component: Skills,
        isExternal: false,
    },
    {
        id: 'experience',
        to: '/experience',
        text: 'Experience',
        component: Experience,
        isExternal: false,
    },
    {
        id: 'contact-me',
        to: 'mailto:lundback.anders@gmail.com',
        text: 'Contact me',
        isExternal: true,
    },
];

export interface Route {
    id: string;
    to: string;
    isExternal: boolean;
    text: string;
    component?: () => React.ReactNode;
}

export default routesList;
