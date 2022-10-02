import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Category from './Category';

// Gets all categories/tag and loops through them
const categoryQuery = graphql`
  {
    allContentfulLicks {
        nodes {
          content {
            tags
          }
        }
      }
    }
`

const Categories = () => {
    const data = useStaticQuery(categoryQuery);
    // licks is an array of content that has an array of tags
    const licks = data.allContentfulLicks.nodes;
    // will hold tag name and tag count
    const holder = {};
    licks.forEach(lick => {
        lick.content.tags.forEach(tag => {
            if (holder[tag]) {
                holder[tag]++;
            } else {
                holder[tag] = 1;
            }
        })
    })

    // need to turn holder into array so we can use map
    const tags = Object.entries(holder);

  return (
    <div className="row">
        {tags.map((tag, idx) => {
           return <Category tag={tag} key={idx} />
        })}
    </div>
  )
}

export default Categories