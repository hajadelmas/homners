/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it


var path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const StoreTemplate = path.resolve("src/templates/product.js")
    const BlogTemplate = path.resolve("src/templates/post.js")
    resolve(
      graphql(`
        {
            allDatoCmsProduct {
                edges {
                    node {
                        slug
                    }
                }
            }
            allDatoCmsPost {
                edges {
                  node {
                    slug
                  }
                }
              }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allDatoCmsProduct.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        });
        result.data.allDatoCmsPost.edges.forEach(data => {
          createPage({
            path: data.node.slug,
            component: BlogTemplate,
            context: {
              slug: data.node.slug
            }
          });
        });
        
        return
      })
    )
  })
}
