import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import Accordion from '../components/Accordion'
import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
import Popup from '../components/Popup'
import FormControlled from '../components/FormControlled'

//import Image from '../components/Image'

// Export Template for use in CMS preview
export const ComponentsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  gallery,
  section2,
  video,
  videoPoster,
  videoTitle,
  accordion,
  body
}) => (
  <main>
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
        <Content source={section1} className={'bg-red-400 relativ max-w-5xl mx-auto'} />
      </div>
    </section>

    <section className="section">
      <div className="container flex -mx-2 mb-8">
        <img className="object-contain w-1/2 px-2" alt="" src="https://ucarecdn.com/3adac79d-9671-4dc5-a863-fb16e0c2f231/"/>
        <Content source={section1} className={'w-1/2 px-2'} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <h2>Our gallery component</h2>
        <Gallery images={gallery} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <section className="BackgroundVideo-section section">
      <BackgroundVideo poster={videoPoster} videoTitle={videoTitle}>
        {video && <source src={video} type="video/mp4" />}
      </BackgroundVideo>
    </section>

    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Popup btnText="Hej Max">
          <form
            className="Form"
            name="Mail form"
            action=""
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="Mail form" />
            <input type="hidden" name="bot-field" />
            <label className="Form--Label Form--InputText">
              <input
                className="Form--Input"
                type="text"
                placeholder="Name"
                name="name"
                required
              />
            </label>
            <label className="Form--Label">
              <input
                className="Form--Input"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </label>
            <label className="Form--Label has-arrow">
              <select
                className="Form--Input Form--Select"
                name="type"
                defaultValue="Type of Enquiry"
                required
              >
                <option disabled hidden>
                  Type of Enquiry
                </option>
                <option>Need to know more</option>
                <option>Found a bug</option>
                <option>Want to say hello</option>
              </select>
            </label>
            <label className="Form--Label">
              <textarea
                className="Form--Input Form--Textarea"
                placeholder="Message"
                name="message"
                rows="10"
                required
              />
            </label>
            <input
              className="Button Form--SubmitButton"
              type="submit"
              value="Enquire"
            />
          </form>
        </Popup>
      </div>
    </section>
  </main>
)

const ComponentsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ComponentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ComponentsPage

export const pageQuery = graphql`
  query ComponentsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
        accordion {
          title
          description
        }
      }
    }
  }
`
