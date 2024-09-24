"use client";
import { Typography, Link } from "@mui/material";
import React from "react";

const AboutMe: React.FC = () => (
  <div className="is-text" data-testid="AboutMe">
    <Typography variant="h1">About me</Typography>
    <Typography paragraph>
      {`Product team leader with a decade of commercial engineering experience.
      I enjoy putting a team together, empowering   leaders and either finding
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
      childhood.`}
    </Typography>
    <Typography paragraph>
      {`I’m available for freelance consulting to help your business thrive. Whether you're looking to find your product-market fit, optimize your website for search engines, or need support with web and app development, I can provide the strategic guidance and hands-on expertise you need.`}
    </Typography>
    <Typography paragraph>
      {`Lundback Product Consulting AB. Registered limited company in Sweden. Organisation number: 559495-3738.`}
    </Typography>
    <Typography paragraph>
      {`Learn more about `}
      <Link href="/services" target="_blank" rel="noopener">
        my services
      </Link>
      {` and how I can help your business.`}
    </Typography>
  </div>
);

export default AboutMe;
