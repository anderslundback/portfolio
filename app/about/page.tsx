"use client";
import { Typography, Link } from "@mui/material";
import React from "react";

const AboutMe: React.FC = () => (
  <div className="is-text" data-testid="AboutMe">
    <Typography variant="h1">About me</Typography>
    <Typography paragraph>
      {`Product team leader with a decade of commercial engineering experience.
      I enjoy putting a team together, empowering leaders and either finding
      the product-market-fit, or scaling up, depending on the organisation. I
      have worked in various company sizes, and industries across Europe.`}
    </Typography>
    <Typography paragraph>
      {`In my spare time I like to spend time with family and friends, and I
      play `}
      <Link
        href="https://en.wikipedia.org/wiki/Padel"
        target="_blank"
        rel="noopener"
      >
        padel
      </Link>
      {` and chess. I've been playing the latter competitively since
      I was a kid. If you're interested in chess, check out my website `}
      <Link href="https://better-chess.com/" target="_blank" rel="noopener">
        Better Chess
      </Link>
      .
    </Typography>
  </div>
);

export default AboutMe;
