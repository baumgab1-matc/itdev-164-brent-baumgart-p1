 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  /* Your site config here */
  siteMetadata: {
    title:'Quick Licks',
    description:'Get your daily fix of licks. From beginners to shred gods, we got licks for you!',
    author:'Brent Baumgart',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/data/images`,
      },
    },
    {
      resolve:`gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`
      }
    }
  ]
}

// Site is local, so not sure if you need these to see my content data, nothing senstive is being hosted so not to worried about
// having token and id posted
// SPACE_ID=q1xxzf1yzmyw
// ACCESS_TOKEN=RzGs1-XTNXQn7gYQ262PNtMBGYfDOo09gel4DaZQRfg
