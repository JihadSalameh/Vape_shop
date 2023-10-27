import React from 'react'
import ImageSlider from '../ImageSlider'
import { SliderData } from '../SliderData'
import './Home.css'

function Home() {
  return (
    <ImageSlider slides={SliderData} />
  )
}

export default Home