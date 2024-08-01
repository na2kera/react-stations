// @ts-check

// @ts-ignore
export const BreedsSelect = ({ breeds,setSelectedBreed}) => {


  function handleChange(event){
    setSelectedBreed(event.target.value)
  }
  return (
    <>
      <select onChange={handleChange}>
        { Object.keys(breeds).map((breed) => <option value={breed} key={breed} >{breed}</option>)}
      </select>
    </>
  )
}

export default BreedsSelect
