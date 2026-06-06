import React from 'react'
import { Navbar } from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import  OurServices  from './components/OurServices'
import OurWork from './components/OurWork'
import HijamaDays from './components/HijamaDays'

import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-background'>
      <Navbar />
      <Hero />
      <OurServices/>
      <OurWork/>
      <Stats/>
      <HijamaDays/>
      <Contact/>
    </div>
  )
}

export default App