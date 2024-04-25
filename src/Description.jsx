// @ts-check

import { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('')

  async function onChange() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const images = await response.json()
    setDogUrl(images.message)
    console.log(images.message)
  }
  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={onChange}>変更</button>
    </>
  )
}

export default Description
