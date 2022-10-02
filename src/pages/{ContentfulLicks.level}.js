import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout';
import Lick from '../components/Lick';

const TemplateForLevels = ({data =[]}) => {
  const licks = data.allContentfulLicks.nodes;
  let title = "Sorry, no licks found for that level";

  if (licks) {
    title = "All " + licks[0].level + " Licks";
  }

  return <Layout>
    <section>
        <div className="container">
        <h1 className='text-center'>{title}</h1>
            <hr />
            <div className="row">
                {licks.map((lick, idx) => {
                return <Lick key={idx} lick={lick} />
                })}
            </div>
        </div>
    </section>
 </Layout>
}

export const query = graphql`
query getLickByLevel($level: String) {
    allContentfulLicks(filter: {level: {eq: $level}}) {
      nodes {
        level
        description
        title
      }
    }
  }
  
`

export default TemplateForLevels