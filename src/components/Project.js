import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  index,
  slug,
}) => {
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(({ id, title }) => (
            <span key={id}>{title}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github} target="_blank">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
