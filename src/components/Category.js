import { Link } from 'gatsby';
import React from 'react'
import slugify from "slugify"

// Component for an individual category(Warm ups, Sweep Picking....etc)
const Category = (prop) => {
  const [name, count] = prop.tag;
  const slug = slugify(name, { lower: true })
  return (
   <div className="col-sm-4 d-flex justify-content-center p-3">
    <div className="card" style={{width: "18rem"}}>
        <div className="card-body text-center">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"> ({count})</p>

            <Link to={`/${slug}`} className="btn btn-primary" >View All</Link>
        </div>
    </div>
  </div>
  )
}

export default Category