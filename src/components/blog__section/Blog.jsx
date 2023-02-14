import React from 'react';
import "../commons/commons.css";
import "./Blog.css";

export default function Blog() {
  return (
    <section class="blog__section">
        <div class="container">
          <div class="blog__section-inner">
            <h2 class="heading">BLOG</h2>
            <ul>
              <li>
                <div class="blog__section-img">
                  <img src="./img/IMG.png" alt="blends" width="371px" height="203px"/>
                </div>
                <div class="blog__section-text">
                  <h3>How to create your own essential oil diffuser blends
                  </h3>
                  <hr/>
                  <p>As you begin creating your own diffuser blends, it's important to keep a few ...</p>
                </div>
              </li>
              <li>
                <div class="blog__section-img">
                  <img src="./img/IMG.png" alt="blends" width="371px" height="203px"/>
                </div>
                <div class="blog__section-text">
                  <h3>How to create your own essential oil diffuser blends
                  </h3>
                  <hr/>
                  <p>As you begin creating your own diffuser blends, it's important to keep a few ...</p>
                </div>
              </li>
              <li>
                <div class="blog__section-img">
                  <img src="./img/IMG.png" alt="blends" width="371px" height="203px"/>
                </div>
                <div class="blog__section-text">
                  <h3>How to create your own essential oil diffuser blends
                  </h3>
                  <hr/>
                  <p>As you begin creating your own diffuser blends, it's important to keep a few ...</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}
