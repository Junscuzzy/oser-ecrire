/* eslint-disable @typescript-eslint/no-var-requires */
const sanityClient = require('@sanity/client')

const isDev = process.env.NODE_ENV !== 'production'

require('dotenv').config({
  path: `.env.${isDev ? 'development' : 'production'}`,
})

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECTID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  token: process.env.GATSBY_SANITY_TOKEN,
  useCdn: false, // `false` if you want to ensure fresh data
})

exports.handler = function (event, context, callback) {
  const { postSlug } = event.queryStringParameters

  if (!postSlug) {
    return callback(null, {
      statusCode: 500,
      body: 'postSlug missing',
    })
  }

  const query = `*[_type == "comment" && post._ref == $slug] | order(_createdAt asc)`
  const params = { slug: postSlug }

  client
    .fetch(query, params)
    .then(res =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res),
      }),
    )
    .catch(error => {
      console.log(error)
      return callback(null, {
        statusCode: 500,
        body: 'Err',
      })
    })
}
