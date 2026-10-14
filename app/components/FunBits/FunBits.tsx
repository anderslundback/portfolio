"use client";
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";

const throwResults = [
  "Ace! Straight into the basket. 🎯",
  "Birdie. Clean and simple.",
  "Par. Solid, no drama.",
  "Hyzer-flip into the trees. Classic. 🌲",
  "Wind got it. Into the water it goes. 💦",
  "Perfect anhyzer line, stopped one metre short.",
];

const fetchResults = [
  "Ball retrieved. Dropped at your feet. Tail wagging.",
  "Ball retrieved… and now it's a game of keep-away.",
  "Dog found a stick instead. Much better.",
  "Ball retrieved, but there's a lot of drool on it.",
  "Dog has decided the ball is theirs now. 🐕",
];

const pick = (list: string[]) => list[Math.floor(Math.random() * list.length)];

export const DiscThrow: React.FC = () => {
  const [result, setResult] = useState<string>();
  return (
    <div>
      <Button variant="outlined" onClick={() => setResult(pick(throwResults))}>
        Throw a disc 🥏
      </Button>
      <Typography aria-live="polite" className="mt-2" role="status">
        {result}
      </Typography>
    </div>
  );
};

export const FetchBall: React.FC = () => {
  const [result, setResult] = useState<string>();
  return (
    <div>
      <Button variant="outlined" onClick={() => setResult(pick(fetchResults))}>
        Throw the ball 🎾
      </Button>
      <Typography aria-live="polite" className="mt-2" role="status">
        {result}
      </Typography>
    </div>
  );
};
