import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Följ mig{' '}
      <a href="https://www.instagram.com/gingerem_yoga/">@gingerem_yoga</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://strongyogi.se/">Strongyogi</a>.
        </span>
      </div>
    </footer>
  </div>
)
