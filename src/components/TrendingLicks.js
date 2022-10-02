import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Lick from './Lick';

const trendingQuery = graphql`
  {
    allContentfulLicks(filter: {trending: {eq: true}}) {
        nodes {
          image {
            gatsbyImageData(layout: FIXED, placeholder: DOMINANT_COLOR)
          }
          description
          title
        }
      }
    }
`

const TrendingLicks = () => {
  const data = useStaticQuery(trendingQuery);
  const licks = data.allContentfulLicks.nodes;

  return (
    <div className="row">
        {licks.map((lick, idx) => {
            return <Lick key={idx} lick={lick} />
        })}
    </div>
  )
}

export default TrendingLicks