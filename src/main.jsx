import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/header'
import Hero_section from './components/hero-section/hero_section'
import Categories from './components/categories__section/Categories'
import Aromatherapy from './components/aromatherapy__section/Aromatherapy'
import Bestsellers from './components/bestsellers__section/Bestsellers'
import Soap from './components/soap__section/Soap'
import BestsellersSecond from './components/bestsellers__section-second/BestsellersSecond'
import Blog from './components/blog__section/Blog'
import Footer from './components/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <main>
      <Hero_section />
      <Categories />
      <Aromatherapy />
      <Bestsellers />
      <Soap />
      <BestsellersSecond />
      <Blog />
    </main>
    <Footer />

  </React.StrictMode>,
)
