import React from 'react'
import ImageSlider from '../ImageSlider'
import { SliderData } from '../SliderData'
import './Home.css'

function Home() {
  return (
    <div className='home_container'>
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default Home