import React from 'react'
import Categories from '../components/Categories';
import Layout from "../components/Layout"
import LicksByLevel from '../components/LicksByLevel';

const category = () => {

  return<Layout>
  
  {/* Licks by Level */}
  <section>
    <div className="container">
      <h1 className='text-center'>Finds Licks By Level</h1>
      <hr />
      <LicksByLevel />
    </div>
  </section>

  <br /><br/>

  {/* Licks by Category*/}
  <section>
    <div className="container">
      <h1 className='text-center'>Find Licks By Tags</h1>
      <hr />
       <Categories />
    </div>
  </section>
</Layout>
}


export default category