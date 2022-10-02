import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Lick from './Lick'

// Component for list all licks for Archive

const query = graphql`
  {
    allContentfulLicks(sort: {fields: level}) {
        nodes {
          image {
            gatsbyImageData(layout: FIXED, placeholder: DOMINANT_COLOR)
          }
          description
          title
          id
        }
      }
  }
`

const AllLicks = () => {
const data = useStaticQuery(query);
const licks = data.allContentfulLicks.nodes;
  return (
     <section>
        <div className="container">
            <div className="row">
                {licks.map((lick, idx) => {
                return <Lick key={idx} lick={lick} />
                })}
            </div>
        </div>
     </section>
  )
}

export default AllLicks