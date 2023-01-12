import React from 'react'

export default function Navbar() {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__left'>
          <img src='/logo512.png' className="header__image" />
          <h3 className='header__left_text'>ReactFacts</h3>
        </div>
        <h4 className='header__text'>React Course - Project 1</h4>
      </div>
    </header>
  )
}
