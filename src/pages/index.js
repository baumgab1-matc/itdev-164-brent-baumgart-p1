import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import TrendingLicks from "../components/TrendingLicks";


export default function Home({data}) {
  const {title, description, author} = data.site.siteMetadata;

  return <Layout>
    {/* jumbotron */}
    <section className="h-100 p-5 bg-light border rounded-3">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">{title}</h1>
          <p className="lead text-center">{description}</p>
        </div>
     </div>
    </section>

    {/* Trending licks */}
    <section>
      <div className="container text-center">
        <h2 className="p-5">Trending Licks</h2>
            <TrendingLicks />
      </div>
    </section>

  </Layout>
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`