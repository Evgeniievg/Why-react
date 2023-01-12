import React from 'react'

export default function Main() {
  return (
    <main className='main'>
      <div className='main__wrapper'>
        <h1 className='main__text'>Fun facts about React</h1>
        <ul className='main__list'>
          <li className='main__list_item'>Was first released in 2013</li>
          <li className='main__list_item'>Was originally created by Jordan Walke</li>
          <li className='main__list_item'>Has well over 100K stars on GitHub</li>
          <li className='main__list_item'>Is maintained by Facebook</li>
          <li className='main__list_item'>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </main>
  )
}
