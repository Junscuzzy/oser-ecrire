/**
 * Fetch Sanity CMS using CROQ queries
 *
 * @link https://www.sanity.io/docs/query-cheat-sheet
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const sanityClient = require('@sanity/client')

const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECTID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  token: process.env.GATSBY_SANITY_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
})

/* 
##################################
This query is copied to previews/PagePreview.ts
##################################
*/
const moduleTypes = {
  ctaModule: `
    link {
      label,
      anchor,
      reference-> { title, slug, },
    },
  `,
  projectsModule: `
    'projects': projects[]-> {
      title,
      slug,
      link,
      'topic': topic->,
      'service': service->,
      'customer': customer->,
    },
  `,
  formationsModule: `
    'formations': formations[]-> {
      title, 
      link, 
      slug, 
      description, 
      testimonial {
        name, 
        text, 
        avatar {
          _type,
          asset-> { 'id': _id }
        },
      },
    },
  `,
  customersModule: `
    'customers': customers[]-> {
      title,
      slug,
      link,
      testimonial {
        name,
        text,
        avatar {
          _type,
          asset-> { 'id': _id }
        },
      },
    },
  `,
  servicesModule: `
    'services': services[]->,
  `,
  bodyModule: `
    body,
  `,
  featuresModule: `
    features[] {
      _key,
      title, 
      content,
      link {
        label,
        anchor,
        reference-> {
          _type,
          title, 
          slug { current }
        }
      }
    },
  `,
  quoteModule: `
    author,
    text,
  `,
  heroModule: `
    mainImage {
      _type,
      alt,
      caption,
      asset { 'id': _ref },
    },
    textSide,
    overlay,
    disableOverlap,
    width,
  `,
  formModule: `
    form {
      'type': _ref,
    },
  `,
  // Use "mainImage" & "link" too
  aboutMeModule: `
    qualities,
    subtitle,
  `,
}

const {
  ctaModule,
  projectsModule,
  formationsModule,
  customersModule,
  servicesModule,
  bodyModule,
  featuresModule,
  quoteModule,
  heroModule,
  formModule,
  aboutMeModule,
} = moduleTypes

const modules = `
  modules[] {
    _key,
    _type,
    title,
    link, 
    introduction,
    slug { current },

    ${projectsModule}
    ${servicesModule}
    ${customersModule}
    ${formationsModule}
    ${bodyModule}
    ${featuresModule}
    ${ctaModule}
    ${quoteModule}
    ${heroModule}
    ${formModule}
    ${aboutMeModule}
  }
`

const page = `
  id,
  title,
  slug,
  subtitle,
  excerpt,
  template,
  image {
    _type,
    asset-> { 'id': _id }
  },

  pageBuilder { ${modules} },
  blog { categories[]-> { title, slug } }
`

const pageQuery = `
  *[_type == "page" && _id == $id] {
    ${page}
  }
`
/* 
##################################
and here
##################################
*/

async function getPages() {
  const query = `
  *[_type == "page"] {
    ${page}
  }`

  return await client.fetch(query)
}

async function getModal() {
  const query = `
    *[_type == "modal" && _id == "modal"] {
      active,
      delay,
      ${modules}
    }
  `

  const modals = await client.fetch(query)
  return modals[0]
}

module.exports = { getPages, getModal }
