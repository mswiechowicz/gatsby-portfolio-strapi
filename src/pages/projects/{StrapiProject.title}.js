import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const ProjectTemplate = ({ pageContext: { title }, data }) => {
  const {
    strapiProject: { description },
  } = data
  return (
    <>
      <Seo title={title.toUpperCase()} description={description} />
      <main className="project-template-page">
        <h2>{title}</h2>
        <p>{description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getSingleProject($title: String) {
    strapiProject(title: { eq: $title }) {
      description
      title
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default ProjectTemplate
