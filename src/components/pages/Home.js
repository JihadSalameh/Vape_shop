import React from 'react'
import ImageSlider from '../ImageSlider'
import { SliderData } from '../SliderData'
import ContactUs from './ContactUs'
import './Home.css'

function Home() {
  return (
    <div>
      <ImageSlider slides={SliderData} />
      <ContactUs />
    </div>
  );
}

export default Home