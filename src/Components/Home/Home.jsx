import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <img src={logo} alt='logo' className="logo"/>
      <h2><Link to='/forms'>Forms</Link></h2>
      <h2><Link to='/another-page'>Another Page</Link></h2>
    </div>
  )
}
