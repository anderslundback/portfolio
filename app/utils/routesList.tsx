import Home from "../../app/page";
import About from "../about/page";
import Experience from "../experience/page";
import Services from "../services/page";
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
  {
    id: "experience",
    to: "/experience",
    text: "Experience",
    component: Experience,
    isExternal: false,
  },
  {
    id: "services",
    to: "/services",
    text: "Services",
    component: Services,
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
