import Home from "../../app/page";
import About from "../about/page";
// import Skills from '../../pages/Skills/Skills';
import Experience from "../experience/page";
export interface Route {
  id: string;
  to: string;
  isExternal: boolean;
  text: string;
  component?: React.FC;
}

const routesList: Route[] = [
  { id: "home", to: "/", text: "Home", component: Home, isExternal: false },
  {
    id: "about",
    to: "/about",
    text: "About",
    component: About,
    isExternal: false,
  },
  //   {
  //     id: "skills",
  //     to: "/skills",
  //     text: "Skills",
  //     component: Skills,
  //     isExternal: false,
  //   },
  {
    id: "experience",
    to: "/experience",
    text: "Experience",
    component: Experience,
    isExternal: false,
  },
  {
    id: "contact",
    to: "mailto:lundback.anders@gmail.com",
    text: "Contact",
    isExternal: true,
  },
];

export default routesList;
