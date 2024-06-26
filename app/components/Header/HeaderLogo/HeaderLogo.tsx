import React, { ReactNode } from "react";
import Link from "next/link";

const HeaderLogo = (): ReactNode => (
  <Link href="/" className="HeaderLogo" data-testid="HeaderLogo">
    <label className="firstName">Anders</label>
    <label className="lastName">Lundback</label>
  </Link>
);

export default HeaderLogo;
