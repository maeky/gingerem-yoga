import React from 'react'
import InstagramFeed from './InstagramFeed'
// import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Följ mig{' '}
      <a href="https://www.instagram.com/gingerem_yoga/">@gingerem_yoga</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer bg-black text-white">
      <div className="container taCenter py-8">
        <h2>Hör gärna av dig!</h2>
        <a
          className="text-white no-underline"
          href="mailto:emilie@strongyogi.se"
        >
          emilie@strongyogi.se
        </a>
        <br />
        <a
          className="text-white no-underline"
          href="https://www.instagram.com/gingerem_yoga/"
        >
          @gingerem_yoga
        </a>
        <br />
        <address className="pb-16">Floragatan 7, Svedala</address>
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a className="text-white no-underline" href="https://strongyogi.se/">
            Strongyogi
          </a>
          .
        </span>
      </div>
    </footer>
  </div>
)
