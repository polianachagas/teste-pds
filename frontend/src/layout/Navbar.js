import '../styles/Navbar.css';
import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <img src='logo_restaurante.png' className='logo'/>

      <div className='home-itens'>
        <a>Home</a>
        <a>Cardápio</a>
      </div>
    </div>
  )
}
