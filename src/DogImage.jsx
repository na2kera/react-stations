export const DogImage = props => {
  console.log(props.imageUrl)
  return (
    <>
      <img src={props.imageUrl} />
    </>
  )
}

export default DogImage
