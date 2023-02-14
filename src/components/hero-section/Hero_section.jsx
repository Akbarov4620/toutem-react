import React from 'react';
import "../commons/commons.css";
import "./Hero_section.css";

export default function hero_section() {
  return (
    <section class="hero__section">
        <div class="container">
          <div class="hero__section-inner">
            <div class="hero__section-text">
              <h2 class="heading">Pear kiwi 
                & Mint</h2>
              <p class="size-14px">
                They say that home is where the heart is. Perhaps that's why a feeling of loss is so apparent when you are far from the ones you love. 
              </p>
            </div>
            <div class="hero__section-img">
              <img src="./img/Group 48.png" alt="cosmetic bottle" width="770px" height="520px" />
            </div>
          </div>
        </div>
      </section>
  )
}
