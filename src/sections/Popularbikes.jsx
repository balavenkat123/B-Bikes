import { products } from "../constants"

const Popularbikes = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="sm:text-6xl text-4xl font-bold"><span className="text-sky-500">Popular</span>  products</h1>
        <p className="lg:max-w-lg mt-2 font-montserrat">here are some more products which can be provided</p>
      </div>
      <div className="mt-16 "></div>
    </section>
  )
}

export default Popularbikes