import { Chip, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import React from "react";
import { interests } from "./interests/data";

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
    <Typography variant="body1" className="mt-6">
      Off the clock, I’m happiest with a chess clock, a disc golf bag, a golden
      retriever, a good game or a great film.
    </Typography>
    <Stack
      direction="row"
      spacing={1}
      useFlexGap
      flexWrap="wrap"
      className="mt-3"
      component="nav"
      aria-label="Interests"
    >
      {interests.map((i) => (
        <Chip
          key={i.id}
          component={NextLink}
          href={`/interests#${i.id}`}
          label={`${i.emoji} ${i.title}`}
          clickable
        />
      ))}
    </Stack>
  </>
);

export default Home;
