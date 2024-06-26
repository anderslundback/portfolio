"use client";
import React, { useState } from "react";
import HeaderMenuNav from "./HeaderMenuNav/HeaderMenuNav";
import routesList, { Route } from "../../../utils/routesList";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="HeaderMenu" data-testid="HeaderMenu">
      <HeaderMenuNav isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <div className={`links ${isOpen ? "is-open" : ""}`}>
        {routesList.map((route) => (
          <MenuLink
            key={route.to}
            route={route}
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>
    </div>
  );
}

function MenuLink({ route: { to, text }, onClick }: MenuLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={to}
      className={`link${pathname === "/" ? "is-active" : ""}`}
      onClick={onClick}
    >
      <p>{text}</p>
    </Link>
  );
}

interface MenuLinkProps {
  route: Route;
  onClick: (event: React.MouseEvent) => void;
}
