"use client";
import { Typography } from "@mui/material";
import React from "react";

const Services: React.FC = () => (
  <div className="is-text" data-testid="Services">
    <Typography variant="h4" component="h1">
      Services
    </Typography>
    <Typography paragraph>
      {`I’m available for freelance consulting to help your business thrive. Whether you're looking to find your product-market fit, optimize your website for search engines, or need support with web and app development, I can provide the strategic guidance and hands-on expertise you need.`}
    </Typography>
    <Typography paragraph>
      {`Lundback Product Consulting AB. Registered limited company in Sweden. Organisation number: 559495-3738.`}
    </Typography>
    <Typography variant="h5" component="h2">
      What I Offer:
    </Typography>
    <Typography paragraph>
      {`• Strategic support during the product discovery phase, using design thinking to align your product vision with business goals.`}
    </Typography>
    <Typography paragraph>
      {`• Leading story mapping, storyboarding, release planning, and roadmap sessions to set a clear and actionable direction.`}
    </Typography>
    <Typography paragraph>
      {`• Building and managing a product backlog, writing user stories and acceptance criteria to ensure a smooth development process.`}
    </Typography>
    <Typography paragraph>
      {`• Facilitating backlog refinement meetings, prioritizing tasks, and planning sprints to keep development on track.`}
    </Typography>
    <Typography paragraph>
      {`• Collaborating with design teams to create user-focused UI/UX that aligns with your overall product strategy.`}
    </Typography>
    <Typography paragraph>
      {`• Conducting Sprint Reviews to demo progress, gather stakeholder feedback, and adjust as needed.`}
    </Typography>
    <Typography paragraph>
      {`• Running customer research, including surveys and interviews, to identify key metrics and improve your product’s impact.`}
    </Typography>
  </div>
);

export default Services;
