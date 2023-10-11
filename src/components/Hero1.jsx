const Hero1 = () => {
  return (
    <div className="flex justify-around">
      <div>
         <h5 className="text-orange-500 flex justify-start">For Better Future</h5>
         <div className="text-black text-5xl font-bold flex-col">
         <h2 className="mt-8 mb-4">HIGH QUALITY</h2>
         <h2 className="flex justify-start">COURSES</h2>
         </div>
  
         <div className="text-gray-500 mt-12">
          <h6 className="flex justify-start">Every day brings with it a fresh</h6>
          <h6 className="flex justify-start"> set of learning possibilities.</h6>
         </div>
      </div>
       {/* image div */}
      <div className="relative">
      <img src="/Placeholder.png" className="flex justify-end h-72 ml-auto z-20 mb-auto"/>
      </div>

    </div>
  )
}

export default Hero1