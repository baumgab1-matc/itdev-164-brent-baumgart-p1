import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Level from './Level';


// Component grabs the count for levels and loops through 
const levelCounts = graphql`
{
    beginner: allContentfulLicks(filter: {level: {eq: "Beginner"}}) {
        totalCount
    }
  
    intermediate: allContentfulLicks(filter: {level: {eq: "Intermediate"}}) {
        totalCount
    }
    
  
    advanced: allContentfulLicks(filter: {level: {eq: "Advanced"}}) {
      totalCount
    }
}
`

const LicksByLevel = () => {
    const levelObj = useStaticQuery(levelCounts);
    const levels = Object.entries(levelObj);

  return (
    <div className="row">
     {levels.map((level,idx) => {
        return <Level level={level} key={idx} />
    })}
    </div>
  )
}

export default LicksByLevel