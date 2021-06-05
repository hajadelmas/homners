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
    const OpeTemplate = path.resolve("src/templates/operation.js")
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
            allDatoCmsOperation {
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
            path: `/products/${edge.node.slug}/`,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        });
        result.data.allDatoCmsPost.edges.forEach(data => {
          createPage({
            path: `/posts/${data.node.slug}/`,
            component: BlogTemplate,
            context: {
              slug: data.node.slug
            }
          });
        });
        result.data.allDatoCmsOperation.edges.forEach(data => {
          createPage({
            path: `/operations/${data.node.slug}/`,
            component: OpeTemplate,
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
