import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import Dogs from '../components/dogs'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const dogs = get(this, 'props.data.allContentfulDog.edges')
    console.log("these are the dogs")
    console.log(dogs)

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className={styles.hero}>Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {dogs.map(({ node }) => {
                return (
                  <li key={node.dogId}>
                    <Dogs dog={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
query Dogs {
  allContentfulDog {
    edges {
      node {
        dogId
        dogName
        dogDateofBirth
      }
    }
  }
  }
`
