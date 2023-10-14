import Cards from "./Cards"

const Hero1 = () => {
  return (
    <div className="relative md:flex justify-around mt-32">
      <div>
         <h5 className="text-orange-500 md:flex justify-start font-bold">For Better Future</h5>
         <div className="text-black text-5xl font-bold flex-col">
         <h2 className="md:flex justify-start mt-8 mb-4">HIGH QUALITY</h2>
         <h2 className="md:flex justify-start">COURSES</h2>
         </div>
  
         <div className="text-gray-500 mt-12">
          <h6 className="md:flex justify-start">Every day brings with it a fresh</h6>
          <h6 className="md:flex justify-start"> set of learning possibilities.</h6>
         </div>

         <div className="md:flex justify-start mt-8">
         <button className="bg-orange-600 text-white  hover:bg-white hover:text-orange-500 py-2 px-4 rounded mr-4">Get Quote Now</button>
         <button className="border-2 border-orange-500 text-orange-500 bg-white py-2 px-4 rounded hover:bg-orange-500 hover:text-white hover:border-orange-500">Learn More</button>
         </div>

         <div className="flex justify-center items-center">
         <Cards/> 
         </div>
      </div>
    </div>
  )
}

export default Hero1