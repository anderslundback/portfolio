import { Card, CardContent } from "@mui/material";
import React from "react";

const jobs = [
  {
    id: "0",
    company: "AmeriForce",
    title: "Software Engineer",
    years: "2021 - Present",
  },
  {
    id: "1",
    company: "ID Software",
    title: "Software Engineer",
    years: "2019 - 2021",
  },
];

export default function Experience() {
  return (
    <div className="is-text" data-testid="Experience">
      <h1>Experience</h1>
      {jobs.map((job) => (
        <Card key={job.id} sx={{ minWidth: 275 }}>
          <CardContent key={job.company}>
            <h2>{job.title}</h2>
            <h3>{job.company}</h3>
            <p>{job.years}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
