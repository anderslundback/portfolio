import { Link, Typography } from "@mui/material";
import React from "react";
import { DiscThrow, FetchBall } from "../components/FunBits/FunBits";
import { interests } from "./data";

const Interests: React.FC = () => (
  <div className="is-text" data-testid="Interests">
    <Typography variant="h1">Off the clock</Typography>
    <Typography paragraph>
      When I’m not building products, you’ll find me at a chessboard, on a disc
      golf course, on a walk with my golden retriever, or in front of a game or
      a film.
    </Typography>
    {interests.map((interest) => (
      <section key={interest.id} id={interest.id} className="my-8">
        <Typography variant="h4" component="h2">
          <span aria-hidden="true">{interest.emoji} </span>
          {interest.title}
        </Typography>
        <Typography paragraph>{interest.blurb}</Typography>
        {interest.favourites && interest.favourites.length > 0 && (
          <ul className="list-disc pl-6 mb-4">
            {interest.favourites.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
        {interest.link && (
          <Typography paragraph>
            <Link href={interest.link.href} rel="noopener">
              {interest.link.label}
            </Link>
          </Typography>
        )}
        {interest.id === "disc-golf" && <DiscThrow />}
        {interest.id === "golden-retriever" && <FetchBall />}
      </section>
    ))}
  </div>
);

export default Interests;
