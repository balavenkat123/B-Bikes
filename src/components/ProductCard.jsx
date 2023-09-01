import { star } from "../assets/icons"

const ProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] "/>
        <div className="mt-8 flex justifu-start gap-4">
            <img src={star} alt="rating" width={24} height={24} />5
        </div>
    </div>

  )
}

export default ProductCard