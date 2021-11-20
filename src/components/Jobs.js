import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob(sort: { fields: created_at }) {
      nodes {
        company
        date
        desc {
          id
          name
        }
        id
        position
      }
    }
  }
`

const Jobs = () => {
  const {
    allStrapiJob: { nodes: jobs },
  } = useStaticQuery(query)
  const [selected, setSelected] = useState(0)
  const { company, position, date, desc } = jobs[selected]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map(({ company }, index) => {
            return (
              <button
                key={index}
                className={
                  index === selected ? "active-btn job-btn" : "job-btn"
                }
                onClick={() => setSelected(index)}
              >
                {company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(({ id, name }) => (
            <div className="job-desc" key={id}>
              <FaAngleDoubleRight className="job-icon" />
              <p>{name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
