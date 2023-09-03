
const Button = ({lable,iconURL}) => {
  return (
    <button className='btn border-2 border-pink-300 bg-indigo-100 rounded-full mt-5 
    flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg text-black'>
        {lable}
        <img src={iconURL} alt="arrow bro" className='h-5 w-5 ml-2 rounded-full'/>
    </button>
  )
}

export default Button