import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio, projects } from "../../styles/projects.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const Projects = data.projects.nodes
  const contact = data.contact.siteMetadata.contact

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projects}>
          {Projects.map(project => (
            <Link
              to={"/projects/" + project.frontmatter.slug}
              key={project.id}
              className="main-komp"
            >
              <div>
                <GatsbyImage
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                />
                <h3> {project.frontmatter.title} </h3>
                <p> {project.frontmatter.stack} </p>
                <p> {project.frontmatter.date} </p>
              </div>
            </Link>
          ))}
        </div>
        <p className="animation-v">Like what you see? Email me at {contact}</p>
      </div>
    </Layout>
  )
}

//  export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date(fromNow: true)
          thumb {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
