import React, { Component } from 'react'
import Image from '../components/Image'

import './InstagramFeed.css'

// A quick way to get your access token
// https://instagram.pixelunion.net/

export default class InstagramFeed extends Component {
  static defaultProps = {
    accessToken: '6482032470.1677ed0.a58a83156af247aa9358ac6a8a71ee99',
    count: 20
  }

  state = {
    mounted: false,
    posts: []
  }

  clearStorage() {
    const lastclear = localStorage.getItem('lastclear'),
      time_now = new Date().getTime()
    // .getTime() returns milliseconds so 1000 * 60 * 60 * 24 = 1 days
    if (time_now - lastclear > 1000 * 60 * 60 * 1) {
      localStorage.clear()
      localStorage.setItem('lastclear', time_now)
    }
  }

  componentDidMount() {
    this.clearStorage()
    if (!this.state.mounted) {
      this.fetchInstagram()
      this.setState({
        mounted: true
      })
    }
  }

  fetchInstagram = () => {
    let insaFeed = localStorage.getItem('insaFeed')
      ? localStorage.getItem('insaFeed')
      : false

    if (!insaFeed) {
      typeof window !== 'undefined' &&
        fetch(`https://instagramapi.thrivex.io/?ref=${this.props.accessToken}`)
          .then(res => res.json())
          .then(data => {
            insaFeed = data && data.items ? data.items : []
            localStorage.setItem('insaFeed', JSON.stringify(insaFeed))
            this.setState({
              posts: insaFeed
            })
          })
          .catch(err => console.error(err))
    }
    this.setState({
      posts: JSON.parse(insaFeed)
    })
  }

  renderLoadingItems = () => (
    <div className="InstagramFeed">
      {[...Array(this.props.count)].map((x, index) => (
        <div
          className="InstagramFeed--EmptyPost"
          data-display="Loading"
          key={`EmptyPost-${index}`}
        />
      ))}
    </div>
  )

  render() {
    if (!this.state.posts.length) {
      return this.renderLoadingItems()
    }
    return (
      <div className="InstagramFeed">
        {this.state.posts.slice(0, this.props.count).map(post => (
          <Post
            key={post.code}
            src={post.display_src}
            code={post.code}
            caption={post.caption}
          />
        ))}
      </div>
    )
  }
}

const Post = ({ src, code }) => (
  <a
    className="InstagramFeed--EmptyPost InstagramFeed--EmptyPost-loaded"
    href={`https://instagram.com/p/${code}`}
    rel="noopener noreferrer"
    target="_blank"
    aria-label="Instagram Post Link"
  >
    <Image background src={src} lazy alt="instagram image" />
  </a>
)
