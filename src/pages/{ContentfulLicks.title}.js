import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {FaFireAlt} from 'react-icons/fa'
import styled from 'styled-components';


// This is the actual page that has the licks and info about the lick
// this creates a template for those pages
const TemplateForLicks = ({data = []}) => {
    const {title, description, metronome, content, image, level, trending} = data.contentfulLicks;
    const imagePath = getImage(image);
    const notes = content.notes;
    const tags = content.tags;

return <Layout>
    <br/>
    <section>
        <div className="container">
        <div className="row text-center">
            <div className="col-sm-8">
               <Image className='img-fluid' image={imagePath} alt={title} />
            </div>
            <div className="col-sm-4">
                {/* title and description */}
                <h1>{title} </h1>
                {trending ? <h5> (<FaFireAlt/> trending lick) </h5> : ''}
                <hr />
                <h4>{description}</h4>
                <br />

                {/* loop through and print tags */}
                <div className="row">
                    {tags.map((tag, idx) => {
                        return <div key={idx} className='col-sm p-2'> 
                            <TagButton type="button" className="btn btn-dark" disabled>{tag}</TagButton>
                        </div>
                    })}
                </div>
                <br />

                {/* level and suggested metronome speeds */}
                <div className="row">
                    <div className="col-sm">
                        <h6>Level : {level}</h6>
                    </div>
                    <div className="col-sm">
                        <h6>Metronome : {metronome} bpm</h6>
                    </div>
                </div>
            </div>
        </div>
        <br />

        <div className="row">
            {/* Notes  */}
            <h2 id='notes-header'>Notes</h2>
            <div className="col-sm-8">
                <ul>
                    {notes.map((note, idx) => {
                        return <li key={idx} className='p-2'>
                            {note}
                        </li>   
                    })}
                </ul>
            </div>
        </div>


        </div>
    </section>
  </Layout>
}

const TagButton = styled.button`
    width: 150px;
`

const Image = styled(GatsbyImage)`
    max-width: 700px;
    max-height: 400px;
`

export const query = graphql`
 query getLickByTitle($title: String) {
    contentfulLicks(title: { eq: $title }) { 
      title
      description
      metronome
      content {
        notes
        tags
      }
      image {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
      }
      level
      trending
    }
  }
`

export default TemplateForLicks