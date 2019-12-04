import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const PrivatePageTemplate = ({ 
  title, 
  subtitle, 
  featuredImage, 
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
}) => (
  <main className="Private">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={section1} className={"max-w-5xl relativ mx-auto"} />
      </div>
    </section>

    <section className="section bg-gray-green">
      <div className="container">
        <Content source={section2} className={"text-5xl max-w-5xl relativ mx-auto"} />
      </div>
    </section>

    <div className="pb-16 mb-8">
      <section className="section bg-snow-white">
        <div className="container">
          <Content source={section3} className={"max-w-5xl relativ mx-auto"} />
          <div className="pt-12 flex justify-center">
          <button className="px-16 bg-snow-white hover:bg-white text-gray-green font-bold py-2 px-4 rounded-full uppercase">
            Gå med
          </button>
          <button className="px-16 bg-snow-white hover:bg-white text-gray-green font-bold py-2 px-4 rounded-full uppercase">
            Gå med
          </button>
        </div>
        </div>
      </section>
    </div>

    <section className="section">
      <div className="container flex mx-2 mb-8">
        <div className="mx-32 w-2/5 px-2">
          <img className="object-cover rounded-full" alt="Bild på Emilie" src="images/emilie.jpg"/>
        </div> 
        <Content source={section4} className={"w-3/5 px-2"} />
      </div>
    </section>

    <div className="pb-16 flex mx-2 mb-8">
      <section className="section bg-snow-white">
        <div className="container w-1/2 px-2">
          <Content source={section5} className={'max-w-lg relativ mx-auto'} />
          <div className="pt-12 flex justify-center">
            <button className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase">
              Berätta mer >
            </button>
          </div>
        </div>
      </section>
      <img className="bg-snow-white object-cover w-1/2" alt="Instruktions bild" src="images/IMG_1359.jpg"/>
    </div>

    <div className="pb-16 mb-8">
      <section className="section bg-gray-green">
        <div className="container">
          <Content source={section6} className={"text-5xl max-w-5xl relativ mx-auto"} />
          <div className="pt-12 flex justify-center">
            <button className="px-16 bg-snow-white hover:bg-white text-gray-green font-bold py-2 px-4 rounded-full uppercase">
              Gå med
            </button>
          </div>
        </div>
      </section>
    </div>

    <div className="flex mx-2 mb-8">
      <img className="bg-snow-white object-cover w-1/2" alt="Instruktions bild" src="images/IMG_1359.jpg"/>
      <section className="section bg-snow-white">
        <div className="container w-1/2 px-2">
          <Content source={section7} className={'max-w-lg relativ mx-auto'} />
          <div className="pt-12 flex justify-center">
            <button className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase">
              Berätta mer >
            </button>
          </div>
        </div>
      </section>
    </div>

  </main>
)

// Export Default PrivatePage for front-end
const PrivatePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <PrivatePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default PrivatePage

export const pageQuery = graphql`
  ## Query for PrivatePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query PrivatePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        section1
        section2
        section3
        section4
        section5
        section6
        section7
      }
    }
  }
`
