import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { bike1 } from '../assets/images'
import { bikes, statistics } from '../constants'
import BikeCard from '../components/BikeCard'




const Hero = () => {
  return (
    <section id='home' className='w-full border-2 border-blue-300 flex xl:flex-row flex-col min-h-screen
     gap-10 max-container bg-sky-50' >
      <div className='relative xl:w-2/4 flex flex-col justify-center items-start w-full padding-x pt-28'>
        <p className='text-bold text-xl text-sky-800'>Our Collection </p>
        <h1 className='mt-8 font-palanque sm:text-8xl font-bold text-8xl'>
          <spam> New Arrival</spam>
          <br/>
          <spam className="text-sky-500">TWO </spam>wheelers 
        </h1>
        <p className='mt-5 text-xl font-montserrat'>Discover new bikes with Best Downpayments all around Hyderabad</p>
        <Button className="mt-5" lable="Shop now " 
        iconURL={arrowRight}/>
      
      <div className='flex justify-starts items-start felx-wrap w-full mt-20 gap-16'>
        {statistics.map((start)=>
          <div key={start.label}>
            <p className='sm:text-4xl text-2xl font-palanquin font-semibold '>{start.value}</p>
            <p className='leading-7 font-semibold '>{start.label}</p>
          </div>          
        )}
      </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center w-full xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center'>
        <img src={bike1} alt="shoe" className='padding-x padding-y bg-sky-100   ' />
      </div>
      <div>
        {bikes.map((bike)=>
          <div key={bike}>
            <BikeCard/>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
