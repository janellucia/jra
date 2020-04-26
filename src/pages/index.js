import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"

import landing from "../images/landing-1.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="landing">
      <div className="wrapper">
        <div className="title">
          <p className="small-title-1">— hair</p>
          <p className="small-title-2">| beauty</p>
        </div>
        <div className="image">
          <img src={landing} alt="" />
          <h2>
            {/* <span>Justin</span> */}
            <span></span>
            <span>J R & <br></br>Associates</span>
          </h2>
        </div>
        <div className="info">
          <p>JR & Associates is a private hair studio located in Parkdale.</p>
          <p>Due to covid-19 we, like everyone, have been closed. We are closely monitoring the situation and want to prepare as best we can for when it is time to open back up.</p>
          <p>As soon as we understand when we may be able to open we will activate a link for online booking.</p>
          <p> Thank you very much for your patience and we really look forward to being able to serve our clients again.</p>
        </div>
      </div>
    </section>
    <section className="book">
      <div className="wrapper">
        <div className="booking-title">
          <h2>book an appointment</h2>
          <p></p>
        </div>
        <a href="https://go.booker.com/location/JRandassociates" target="blank" rel="noopener noreferrer">book now</a>
      </div>
    </section>

  </Layout>
)

export default IndexPage
