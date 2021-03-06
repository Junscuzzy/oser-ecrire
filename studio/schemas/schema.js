/* eslint-disable import/no-unresolved */
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import category from './documents/category'
import post from './documents/post'
import author from './documents/author'
import topic from './documents/topic'
import customer from './documents/customer'
import service from './documents/service'
import formation from './documents/formation'
import project from './documents/project'
import siteSettings from './documents/siteSettings'
import comment from './documents/comment'
import page from './documents/page'
import newsletterForm from './documents/newsletterForm'
import contactForm from './documents/contactForm'
import modal from './documents/modal'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import mainImage from './objects/mainImage'
import quote from './objects/quote'
import video from './objects/video'
import excerpt from './objects/excerpt'
import testimonial from './objects/testimonial'
import siteLinks from './objects/siteLinks'
import authorLinks from './objects/authorLinks'
import internalLink from './objects/internalLink'
import simplePortableText from './objects/simplePortableText'
import pageBlog from './objects/conditionals/pageBlog'
import pageBuilder from './objects/conditionals/pageBuilder'
import footerColumn from './objects/footerColumn'
import feature from './objects/feature'
import quality from './objects/quality'

// Modules
import modules from './objects/modules/modules'
import projectsModule from './objects/modules/projectsModule'
import servicesModule from './objects/modules/servicesModule'
import customersModule from './objects/modules/customersModule'
import ctaModule from './objects/modules/ctaModule'
import simplePortableTextModule from './objects/modules/simplePortableTextModule'
import formationsModule from './objects/modules/formationsModule'
import featuresModule from './objects/modules/featuresModule'
import heroModule from './objects/modules/heroModule'
import lastsPostsModule from './objects/modules/lastsPostsModule'
import formModule from './objects/modules/formModule'
import aboutMeModule from './objects/modules/aboutMeModule'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // document schemas
    siteSettings,
    page,
    author,
    post,
    category,
    topic,
    customer,
    service,
    project,
    formation,
    comment,
    newsletterForm,
    contactForm,
    modal,

    // Object types
    mainImage,
    bodyPortableText,
    simplePortableText,
    quote,
    video,
    excerpt,
    siteLinks,
    authorLinks,
    testimonial,
    internalLink,
    pageBlog,
    pageBuilder,
    footerColumn,
    feature,
    quality,

    // Modules builder
    modules,
    projectsModule,
    servicesModule,
    simplePortableTextModule,
    customersModule,
    formationsModule,
    ctaModule,
    featuresModule,
    heroModule,
    lastsPostsModule,
    formModule,
    aboutMeModule,
  ]),
})
