import React from 'react'
import Navbar from './components/Navbar'

import Hero from './components/Hero'
import HeroRight from './components/HeroRight'
import HeroLeft from './components/HeroLeft'

export default function App() {
  return (
    <>
    <div>
      <Navbar/>
      <div className='grid grid-cols-4'>
        <div>
          <HeroLeft/>
        </div>
        <div className='col-span-2 '><Hero/></div>
        <div><HeroRight/></div>
      </div>
    </div>
    </>
  )
}
