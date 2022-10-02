const path = require("path")
const slugify = require("slugify")

// Code it straight from gatsby docs just tweaked a little
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetLick {
      allContentfulLicks {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)

  result.data.allContentfulLicks.nodes.forEach(lick => {
    lick.content.tags.forEach(tag => {
      const slug = slugify(tag, { lower: true });
      createPage({
        path: `/${slug}`,
        component: path.resolve(`src/pages/templateForTags.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}