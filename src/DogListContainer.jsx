// @ts-check

import { useEffect, useState } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await res.json()
      console.log(data.message)
      setBreeds(data.message)
    }

    dataFetch()
  }, [])

  return <></>
}

export default DogListContainer
