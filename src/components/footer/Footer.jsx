import React from 'react';
import "../commons/commons.css";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <section class="footer__section">
        <div class="container">
          <div class="footer__section-inner">
            <h1>
              <a href="/" class="size-12px">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.262 10.0581L12.4513 18.8401C14.3523 22.2078 15.9036 23.3903 18.9512 23.27C21.9358 23.1521 25.3719 19.0921 23.4369 15.6179L18.619 7.0753C18.4467 7.65027 17.4396 9.68849 17.2619 10.0581L17.262 10.0581ZM10.1434 20.6543C4.8786 27.3598 -2.71675 19.959 0.977333 14.1981C0.977333 14.1981 4.90991 7.3063 6.43925 4.62135C7.62519 2.53926 8.95382 1.22901 10.6813 0.809006C12.7879 0.29685 15.2547 1.4106 16.5697 3.44183C17.4837 4.85338 18.2925 6.1454 16.8671 8.5858C16.6977 8.87568 10.4768 20.2296 10.1434 20.6542V20.6543ZM10.5191 8.2514C9.08019 7.4219 9.08019 5.33685 10.5191 4.50735C11.9579 3.67785 13.7662 4.72035 13.7662 6.37935C13.7662 8.03835 11.9579 9.0809 10.5191 8.2514Z" fill="#5FD788"/>
                  </svg>
                  
                Toutem
              </a>
            </h1>
            <div class="footer-list">
              <nav>
                <h3 class="size-12px">Customer Support</h3>
                <ul>
                  <li>
                    <a href="#" class="size-12px">Shipping</a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Free Return</a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Track your Order</a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Gift Cards</a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h3 class="size-12px">About Us</h3>
                <ul>
                  <li>
                    <a href="#" class="size-12px">Our Values</a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Sustainability</a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Brand Ambassadors</a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Fitness Professionals</a>
                  </li>
                </ul>
              </nav>
              <nav>
                <h3 class="size-12px">Customer Service</h3>
                <ul>
                  <li>
                    <a href="#" class="size-12px">Help</a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Leader Support</a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Pleasant Grove Product Center
                    </a>
                  </li>
                  <li>
                    <a href="#" class="size-12px">Recall—Important Safety Information</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <p class="footer-text size-12px">
            copyright © 2022 Toutem
            all rights reserved.
          </p>
        </div>
      </section>
    </footer>
  )
}
