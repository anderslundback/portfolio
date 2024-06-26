import React from "react";
import "../styles/globals.scss";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <h1 data-testid="Home-title">Anders Lundbäck portfolio</h1>
      </div>
    </>
  );
}
