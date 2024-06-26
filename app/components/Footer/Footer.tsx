import Link from "next/link";
import React from "react";

interface LinkProps {
  to: string;
  text: string;
  isExternal?: boolean;
}

/**
 * Footer component
 * @param to - The link to redirect to
 * @param text - The text to display in the footer
 * @param isExternal - Whether the link is external or not
 * @returns The footer component
 */

export default function Footer({ to, text, isExternal }: LinkProps) {
  return (
    <footer className="is-text-centered">
      <Link
        href={to}
        className={[
          "button",
          "animate__animated",
          "animate__lightSpeedInLeft",
          "animate__delay-1s",
        ].join(" ")}
        // We have to pass the data-testid attribute in camelCase
        // because of compatibility reasons with TypeScript
        //@ts-expect-error
        dataTestid="Footer-link"
      >
        <p>{text}</p>
      </Link>
    </footer>
  );
}
