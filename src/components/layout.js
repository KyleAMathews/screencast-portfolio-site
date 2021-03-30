import * as React from "react";
import { Link } from "gatsby";
import {
  mainBodyClass,
  headerTitleClass,
  headerLinkClass,
  headerClass,
} from "../styles/layout.css.ts";

export default function Layout({ children }) {
  return (
    <main>
      <header className={headerClass}>
        <Link className={headerTitleClass} to="/">
          KYLE MATHEWS
        </Link>
        <Link className={headerLinkClass} to="/about/">
          About
        </Link>
        <Link className={headerLinkClass} to="/blog/">
          Blog
        </Link>
        <Link className={headerLinkClass} to="/projects/">
          Projects
        </Link>
      </header>

      <div className={mainBodyClass}>{children}</div>
    </main>
  );
}
