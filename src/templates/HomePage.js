import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

function handleClick(e) {
  e.preventDefault()
}

// Export Template for use in CMS preview
export const HomePageTemplate = ({
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
  section8,
  section9,
  section10,
  emilie,
  privatyoga,
  designyoga,
  yogaclass
}) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={section1} className={'max-w-5xl relativ mx-auto'} />
        <div className="pt-12 flex justify-center">
          <a
            href="https://www.facebook.com/strongyogistudio"
            className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase no-underline"
          >
            Jag vill vara med!
          </a>
        </div>
      </div>
    </section>

    <section className="section bg-snow-white pb-16 mb-16">
      <div className="container">
        <Content source={section2} className={'max-w-5xl relativ mx-auto'} />
        <div className="pt-12 flex justify-center">
          <button className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase">
            Yoga online >
          </button>
        </div>
      </div>
    </section>

    <section className="section bg-gray-green pb-16 mb-16">
      <div className="container">
        <Content
          source={section3}
          className={'text-5xl max-w-5xl relativ mx-auto'}
        />
        <div className="pt-12 flex justify-center">
          <a
            href="https://www.facebook.com/groups/960622964295874"
            className="px-16 bg-snow-white hover:bg-white text-gray-green font-bold py-2 px-4 rounded-full uppercase no-underline"
          >
            Gå med
          </a>
        </div>
      </div>
    </section>

    <section className="section sm:flex sm:justify-center pb-16">
      <div className="container sm:flex sm:mx-2">
        <div className="pb-16 sm:w-1/2 sm:px-2">
          <Img
            className="justify-center w-2/3 mx-auto object-cover rounded-full"
            alt="Bild på Emilie"
            fluid={emilie.childImageSharp.fluid}
          />
        </div>
        <Content source={section4} className={'sm:w-1/2 sm:ml-8 sm:px-2'} />
      </div>
    </section>

    <div className="pb-16 flex flex-col-reverse sm:flex-row">
      <section className="section flex sm:w-1/2 bg-snow-white">
        <div className="container flex flex-col sm:w-2/3 px-2">
          <Content source={section5} className={'mb-auto'} />
          <div className="pt-12 flex justify-center">
            <button className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase">
              Berätta mer >
            </button>
          </div>
        </div>
      </section>
      <Img
        className="bg-snow-white object-cover sm:w-1/2"
        alt="Instruktions bild"
        fluid={privatyoga.childImageSharp.fluid}
      />
    </div>

    <section className="section bg-gray-green pb-16 mb-16">
      <div className="container">
        <Content
          source={section6}
          className={'text-5xl max-w-5xl relativ mx-auto'}
        />
        <div className="pt-12 flex justify-center">
          <button className="px-16 bg-snow-white hover:bg-white text-gray-green font-bold py-2 px-4 rounded-full uppercase">
            Gå med
          </button>
        </div>
      </div>
    </section>

    <div className="mb-16 flex flex-col mb-8 sm:flex-row">
      <Img
        className="bg-snow-white object-cover sm:w-1/2"
        alt="Foto och grafisk design bild"
        fluid={designyoga.childImageSharp.fluid}
      />
      <section className="section flex sm:w-1/2 bg-snow-white">
        <div className="container flex flex-col sm:w-2/3 px-2">
          <Content source={section7} className={'mb-auto'} />
          <div className="pt-12 flex justify-center">
            <button className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase">
              Berätta mer >
            </button>
          </div>
        </div>
      </section>
    </div>

    <section className="section flex">
      <div className="container flex flex-col sm:flex-row mx-2 mb-8">
        <img
          className="object-contain flex sm:w-1/2"
          alt="Vayumudra logo"
          src="images/Vayumudra_logo_Black_600x.png"
        />
        <Content source={section8} className={'sm:w-1/2 px-2'} />
      </div>
    </section>

    <section className="section bg-snow-white mb-16">
      <div className="container">
        <Content source={section9} className={'max-w-5xl relativ mx-auto'} />
        <div className="pt-12 flex justify-center">
          <button className="px-16 bg-gray-green hover:bg-sea-green text-white font-bold py-2 px-4 rounded-full uppercase">
            Berätta mer >
          </button>
        </div>
      </div>
    </section>

    <div className="pb-16 flex flex-col-reverse mb-8 sm:flex-row">
      <section className="section flex sm:w-1/2 bg-gray-green">
        <div className="container flex flex-col sm:w-2/3 px-2">
          <Content source={section10} className={'mb-auto'} />
          <div className="pt-12 flex justify-center">
            <button className="px-16 bg-snow-white hover:bg-white text-gray-green font-bold py-2 px-4 rounded-full uppercase">
              Kontakta Emilie
            </button>
          </div>
        </div>
      </section>
      <Img
        className="bg-snow-white object-cover sm:w-1/2"
        alt="Yogaklass bild"
        fluid={yogaclass.childImageSharp.fluid}
      />
    </div>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({
  data: { page, emilie, privatyoga, designyoga, yogaclass }
}) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate
      {...page}
      {...page.frontmatter}
      body={page.html}
      emilie={emilie}
      privatyoga={privatyoga}
      designyoga={designyoga}
      yogaclass={yogaclass}
    />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
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
        section8
        section9
        section10
      }
    }
    emilie: file(relativePath: { eq: "emilie.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    privatyoga: file(relativePath: { eq: "IMG_1359.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    designyoga: file(relativePath: { eq: "IMG_1359.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    yogaclass: file(relativePath: { eq: "yoga_class.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
