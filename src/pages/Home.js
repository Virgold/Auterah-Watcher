import React from 'react'
import Navbar from '../components/Home/Home-Navbar'
import Herosection from '../components/Home/Herosection'


export const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='bg-dark text-light'>
        <Herosection/>
        </div>
    </div>
  )
}
