import React from 'react';
import "../commons/commons.css";
import "./Aromatherapy.css";

export default function Aromatherapy() {
  return (
    <section class="aromatherapy__section">
        <div class="container">
          <div class="aromatherapy__section-inner">
            <div class="aromatherapy__section-img">
              <img src="./img/Rectangle 60.png" alt="aromatherapy" width="570px" height="500px" />
            </div>
            <div class="aromatherapy__section-text">
              <h2 class="heading">Improve your well-being with Aromatherapy</h2>
              <div>
                <p class="size-14px">Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.</p>
              </div>
              <a href="#" class="btn">Explore the Collection</a>
            </div>
          </div>
        </div>
      </section>
  )
}
