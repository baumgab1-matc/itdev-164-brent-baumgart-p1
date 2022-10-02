import { Link } from 'gatsby';
import React from 'react'

// Shows a level card, either Beginner Intermediate or Advanced
const Level = ({level}) => {
    const [levelText, count] = level;

  return (
    <div className="col-sm d-flex justify-content-center p-3">
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body text-center">
                <h5 className="card-title" style={{textTransform: 'capitalize'}} >{levelText}</h5>
                <p className="card-text">({count.totalCount})</p>
                {/* Can get away with not slugifying this, just one word */}
                <Link to={`/${levelText}`} className="btn btn-primary">View All</Link>
            </div>
        </div>
    </div>
  )
}

export default Level