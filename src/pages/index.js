import React from "react"
import { graphql, Link } from "gatsby"
import { header, btn } from "../styles/home.module.css"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2 className="animation-v">Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage
          image={data.file.childImageSharp.gatsbyImageData}
          alt={"et billede"}
        />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query billede {
    file(relativePath: { eq: "img.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
