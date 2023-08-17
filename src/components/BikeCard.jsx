

const BikeCard = ({imgURL,changeBigBike,bigBikeImg}) => {
    const handleClick=()=>{
        if(bigBikeImg!==imgURL){
          changeBigBike(imgURL.bigBikeImg)
        }
    }
  return (
    <div className={`border-2 rounded-xl 
        ${bigBikeImg===imgURL
           ? 'border-coral-red'
           : 'border-transparent' 
        } cursor-pointer max-sm:flex-1
    `}>
        onClick={handleClick}
    </div>
  )
}

export default BikeCard