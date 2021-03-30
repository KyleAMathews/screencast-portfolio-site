import { style } from "@vanilla-extract/css";
import { rhythm } from "../utils/typography";
import colors from "open-color/open-color.json";

export const className = style({});

export const headerClass = style({
  padding: rhythm(1),
  background: colors.violet.slice(-1),
  fontWeight: 700,
});

export const headerTitleClass = style({
  color: colors.violet[0],
});

export const headerLinkClass = style({
  color: colors.violet[0],
  paddingLeft: rhythm(1),
});

export const mainBodyClass = style({
  padding: rhythm(1 / 2),
  maxWidth: rhythm(35),
  margin: `0 auto`,
});
