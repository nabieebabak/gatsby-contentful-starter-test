import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ dog }) => (
    <div>
      <h3>
      {dog.dogName}
      </h3>
      <small>{dog.dogDateofBirth}</small>
    </div>
  )