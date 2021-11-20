import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import Seo from "../components/Seo"

const About = () => {
  const {
    strapiAbout: {
      title,
      info,
      stack,
      image: {
        localFile: { publicURL },
      },
    },
  } = useStaticQuery(query)
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img alt={title} className="about-img-svg" src={publicURL} />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(({ id, title }) => (
                <span key={id}>{title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

const query = graphql`
  {
    strapiAbout {
      title
      stack {
        id
        title
      }
      info
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
