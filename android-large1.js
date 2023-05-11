import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './android-large1.css'

const AndroidLarge1 = (props) => {
  return (
    <div className="android-large1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="android-large1-android-large1">
        <span className="android-large1-text">
          <span>
            Will you still love me when im no longer young and beautiful?
          </span>
        </span>
        <Link to="/android-large2" className="android-large1-navlink">
          <img
            src="/playground_assets/rectangle1138-1kqh-200h.png"
            alt="Rectangle1138"
            className="android-large1-rectangle1"
          />
        </Link>
        <span className="android-large1-text2">
          <span>yes</span>
        </span>
        <Link to="/android-large3" className="android-large1-navlink1">
          <img
            src="/playground_assets/rectangle2142-u4cf-200h.png"
            alt="Rectangle2142"
            className="android-large1-rectangle2"
          />
        </Link>
        <span className="android-large1-text4">
          <span>no</span>
        </span>
      </div>
    </div>
  )
}

export default AndroidLarge1
