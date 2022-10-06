import { Link } from 'gatsby';
import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import slugify from "slugify"

// Component that acts a card to show each lick
const Lick = (prop) => {
  const {image, description, title, id} = prop.lick;
  const slug = slugify(title, { lower: true });

  return (
    <div className="col-sm d-flex justify-content-center p-3">
        <div className="card" style={{width: "18rem"}}>
            <StaticImage alt={title} src='../data/images/thumbnail.svg' />
            <div className="card-body text-center">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link key={id} to={`/${slug}`} className="btn btn-primary">Take me There</Link>
            </div>
        </div>
    </div>
  )
}

export default Lick