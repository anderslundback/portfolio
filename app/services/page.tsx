"use client";
import { Typography } from "@mui/material";
import React from "react";

const Services: React.FC = () => (
  <div className="is-text" data-testid="Services">
    <Typography variant="h1">Services</Typography>
    <Typography paragraph>
      {`I am open for freelance work. Contact me if you need help with your business. I can help you find your product-market fit, optimise your site for search engines and support with web and app development.`}
    </Typography>
    <Typography paragraph>
      {`Lundback Product Consulting AB. Registered limited company in Sweden with organisation number: 559495-3738.`}
    </Typography>
  </div>
);

export default Services;
