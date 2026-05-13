import React from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import HowWeWork from '../components/HowWeWork'
import Testimonials from '../components/Testimonials' 
import Team from '../components/Team'
import Projects from '../components/Projects'


const Home = () => {
  return (
    <div>
<Hero   />
<WhatWeDo />
<HowWeWork/>
<Team />
<Projects />  
<Testimonials />

    </div>
  )
}

export default Home