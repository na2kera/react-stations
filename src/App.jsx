// DO NOT DELETE
import React, { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('')

  async function onChange() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const images = await response.json()
    setDogUrl(images.message)
  }

  return (
    <div>
      <header className="App-header">Dogアプリ</header>
      <p>犬の画像を表示するサイトです</p>
      <img src={dogUrl} />
      <button onClick={onChange}>変更</button>
    </div>
  )
}
