import React from 'react'
import Navbar from '../components/home/Navbar'
import '../index.css'
import Background from '../components/home/Background'

export default function Home() {
  return (
    <div className='Bg'>
        <Navbar />
        <Background />
    </div>
  )
}
