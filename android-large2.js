import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './android-large2.css'

const AndroidLarge2 = (props) => {
  return (
    <div className="android-large2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="android-large2-android-large2">
        <span className="android-large2-text">
          <span>
            Will you still love me when I got nothing but my aching soul?
          </span>
        </span>
        <Link to="/android-large4" className="android-large2-navlink">
          <img
            src="/playground_assets/rectangle1148-erl13-200h.png"
            alt="Rectangle1148"
            className="android-large2-rectangle1"
          />
        </Link>
        <span className="android-large2-text2">
          <span>yes</span>
        </span>
        <Link to="/android-large3" className="android-large2-navlink1">
          <img
            src="/playground_assets/rectangle2151-7kxk-200h.png"
            alt="Rectangle2151"
            className="android-large2-rectangle2"
          />
        </Link>
        <span className="android-large2-text4">
          <span>no</span>
        </span>
      </div>
    </div>
  )
}

export default AndroidLarge2
