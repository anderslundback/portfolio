import { Typography, Link } from "@mui/material";
import React from "react";

const Home: React.FC = () => (
  <>
    <Typography variant="h1">Anders Lundbäck</Typography>
    <Typography variant="h6" color="textSecondary">
      Product Leader | Software Engineer
    </Typography>
    <Typography variant="body1">
      Welcome to my portfolio. Here you can find an intro about me, my
      professional experience and contact information. For consulting, visit{" "}
      <Link href="https://lundbackconsulting.com" rel="noopener">
        Lundback Product Consulting
      </Link>
      .
    </Typography>
  </>
);

export default Home;
