import { style } from "@vanilla-extract/css";
import { rhythm } from "../utils/typography";
import colors from "open-color/open-color.json";

export const listItemClass = style({
  marginTop: 0,
  marginBottom: rhythm(1 / 2),
});

export const heroContainer = style({
  display: `flex`,
  marginTop: rhythm(2),
  marginBottom: rhythm(2),
});
export const heroContainerh1 = style({
  marginTop: 0,
});
export const heroContainerImg = style({
  marginLeft: rhythm(2),
  borderRadius: `200px`,
});
