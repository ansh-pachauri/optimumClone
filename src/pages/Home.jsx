import React from 'react'
import Main1 from '../components/Main1'
import MainCarousel from '../components/MainCarousel'
import Main2 from '../components/Main2'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Main1 />
        <MainCarousel />
        <Main2 />
        <Contact/>
    </div>
  )
}

export default Home