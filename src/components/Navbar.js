import React from 'react'

export default function Header() {
  return (
      <header className="header">
          <nav className="header__nav">
              <img src="./logo192.png" className="header__image" />
              <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}
