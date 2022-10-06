import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Lick from "../components/Lick"

// Creates pages for the tags
// gatsby-node.js was created for this page

const TagTemplate = ({ data, pageContext }) => {
  const licks = data.allContentfulLicks.nodes;

  return (
    <Layout>
    <section>
        <div className="container">
        <h1 className='text-center'>Licks for {pageContext.tag}</h1>
        <hr />
            <div className="row">
                {licks.map((lick, idx) => {
                return <Lick key={idx} lick={lick} />
                })}
            </div>
        </div>
     </section>
    </Layout>
  )
}

export const query = graphql`
  query getLickByTag($tag: String) {
    allContentfulLicks(
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        description
        title
        id
      }
    }
  }
`

export default TagTemplate