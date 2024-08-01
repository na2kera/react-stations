// @ts-check

import { useEffect, useState } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const data = await res.json()
      setBreeds(data.message)
    }

    dataFetch()
  }, [])

  const dogDataFetch= async() =>{
    console.log({selectedBreed})
    const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
    const data = await res.json()
    console.log(res)
    console.log(data.message)
    setDataList(data.message)
  }

  return (
    <>
      <BreedsSelect breeds={breeds} setSelectedBreed={setSelectedBreed}/>
      <button onClick={dogDataFetch}>表示</button>
      {dataList.map((data)=><img src={data}/>)}
    </>
  )
}

export default DogListContainer
