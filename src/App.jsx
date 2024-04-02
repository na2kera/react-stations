// DO NOT DELETE
import React, { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} />
      <button
        onClick={() => {
          setDogUrl(
            'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg ',
          )
        }}
      ></button>
    </div>
  )
}
