const ProductCard = (imgURL,name,price) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt="bike4" className="w-[280px] h-[280px]"/>
    </div>
  )
}

export default ProductCard