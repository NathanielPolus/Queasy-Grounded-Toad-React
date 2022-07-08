import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Queasy Grounded Toad</title>
        <meta property="og:title" content="Queasy Grounded Toad" />
      </Helmet>
      <div className="home-container1">
        <img
          alt="image"
          src="/playground_assets/website%20logo%20mrk41-200h.jpg"
          className="home-image"
        />
      </div>
    </div>
  )
}

export default Home
