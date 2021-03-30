import * as React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import * as Styles from "../styles/index.css.ts";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className={Styles.heroContainer}>
        <div>
          <h1 className={Styles.heroContainerh1}>👋 I'm Kyle Mathews</h1>
          <p>I'm running a screencast building a portfolio site.</p>
        </div>
        <StaticImage
          className={Styles.heroContainerImg}
          src="https://pbs.twimg.com/profile_images/1201364751843905536/Q1XVVkab_400x400.jpg"
          width={150}
        />
      </div>

      <p>
        <strong>Pellentesque habitant morbi tristique</strong> senectus et netus
        et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
        placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
        pharetra. Vestibulum erat wisi, condimentum sed,{" "}
        <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum,
        elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
        lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar
        facilisis. Ut felis.
      </p>

      <h2>Popular writings</h2>
      <h3 className={Styles.listItemClass}>
        <Link to="/blog/a-post">A post</Link>
      </h3>
      <h3 className={Styles.listItemClass}>
        <Link to="/blog/another-post">
          Why I went to the great lengths of writing a very long blog post with
          an even longer title
        </Link>
      </h3>
      <Link to="/blog/">All posts</Link>

      <h2>Projects</h2>
      <h3 className={Styles.listItemClass}>
        <Link to="/blog/a-post">A great project I'm proud of</Link>
      </h3>
      <h3 className={Styles.listItemClass}>
        <Link to="/blog/another-post">Another project</Link>
      </h3>
    </Layout>
  );
};

export default IndexPage;
