import React from "react"
import Link from "gatsby-link"
import Container from "../components/container"

export default () =>
  <Container>
    <h1 css={{ marginTop: 0 }}>Gatsby.js Tutorial</h1>
    <p>
      Hi! We’re so happy you decided to try using Gatsby. This tutorial has (or
      rather will have once all parts are written) four parts that'll walk you
      from getting started developing and building Gatsby sites to deploying a
      finished and polished high performance static PWA.
    </p>
    <p>
      This tutorial is for <em>everyone</em>! You do not need to be a programmer
      or React.js expert. We'll walk you through things.
    </p>

    <ol>
      <li>
        <Link to="/tutorial/part-one/">Introduction to basics of Gatsby</Link>
        {` `}— Starting new projects, developing, and deploying sites.
      </li>
      <li>
        Introduction to styling options, plugins, Styled Components/Glamor,
        layout component
      </li>
      <li>
        How to work with GraphQL & different data sources: Markdown, JSON,
        Remote data sources, etc. As well as an introduction to Gatsby’s data
        layer and writing queries with GraphQL.
      </li>
      <li>
        Finishing and deploying a website. React Helmet. We walk through how to
        put the finishing touches on a website project.
      </li>
    </ol>
  </Container>
