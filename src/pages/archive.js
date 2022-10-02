import React from 'react'
import AllLicks from '../components/AllLicks'
import Layout from "../components/Layout"

// archive page lists all licks created
const archive = () => {
  return <Layout>
    <section>
      <div className="container">
        <h1 className='text-center'>All Licks</h1>
        <hr />
      </div>
    </section>

    <section>
      <AllLicks />
    </section>

</Layout>
}


export default archive