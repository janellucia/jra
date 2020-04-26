import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/slider"

import landing from "../images/landing.png"

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
          <h1>
            <span>Justin</span>
            <span>Rousseau <br></br>& Assoc.</span>
          </h1>
        </div>
        <div className="info">
          <p>Justin Rousseau & Associates is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus ipsum leo, vitae condimentum nulla tincidunt eget. Morbi pulvinar augue non orci maximus rutrum id at neque. Fusce posuere ornare lorem, vel rutrum libero blandit at. Duis viverra elit lectus, sed venenatis lectus iaculis non.</p>
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
