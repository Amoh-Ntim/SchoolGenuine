const Hero3 = () => {
  return (
    <div>
       <div className="flex-col p-20 ml-32">
        <h6 className="flex justify-start items-start text-orange-500 xs:justify-center md:justify-start">Practice Advice</h6>
        <h6 className="flex justify-start items-start font-bold text-3xl xs:justify-center md:justify-start">Watch our Courses</h6>
        <div>
          <h6 className="flex justify-start items-start xs:justify-center md:justify-start">Problems trying to resolve the conflict between</h6>
          <h6 className="flex justify-start items-start xs:justify-center md:justify-start">the two major realms of Classical physics: Newtonian mechanics</h6>
        </div>
       </div>

       {/* cards */}
       <div className="relative">
         <img src="./circle float off sec- 9.png" className="absolute"/>
         <div className="xs:gap-y-8 md:flex justify-around items-center gap-x-4">

          {/* first card */}
          <div className="bg-white p-20 transition-transform transform hover:scale-105 hover:shadow-md mb-8">
            <img src="circle sec-1.png" className="flex justify-start items-start mt-4"/>
            <h3 className="text-3xl font-bold flex justify-start items-start mt-4">FREE</h3>
            <div className="mt-4">
             <h3 className="flex justify-start items-start">Organize across all apps by</h3>
             <h3 className="flex justify-start items-start">hand</h3>
            </div>
            <img src="./price sec-.png" className="mt-4"/>
            <h6 className="flex justify-start items-start">Slate helps you see how</h6>
            <h6 className="flex justify-start items-start">many more days you need...</h6>
            <button className="mt-4 bg-orange-500 text-white hover:bg-orange-800 font-semibold py-2 px-16 rounded focus:outline-none focus:ring focus:ring-orange-400">
              Try for Free
            </button>
            <img src="./features-list.png" className="flex justify-center items-center mt-8"/>
          </div>

          {/* second card */}
          <div className="bg-white p-20 transition-transform transform hover:scale-105 hover:shadow-md mb-8">
            <img src="circle sec-1.png" className="flex justify-start items-start mt-4"/>
            <h3 className="text-3xl font-bold flex justify-start items-start mt-4">FREE</h3>
            <div className="mt-4">
             <h3 className="flex justify-start items-start">Organize across all apps by</h3>
             <h3 className="flex justify-start items-start">hand</h3>
            </div>
            <img src="./price sec-.png" className="mt-4"/>
            <h6 className="flex justify-start items-start">Slate helps you see how</h6>
            <h6 className="flex justify-start items-start">many more days you need...</h6>
            <button className="mt-4 bg-orange-500 text-white hover:bg-orange-800 font-semibold py-2 px-16 rounded focus:outline-none focus:ring focus:ring-orange-400">
              Try for Free
            </button>
            <img src="./features-list.png" className="flex justify-center items-center mt-8"/>
          </div>


          {/* third card */}
          <div className="bg-white p-20 transition-transform transform hover:scale-105 hover:shadow-md">
            <img src="circle sec-1.png" className="flex justify-start items-start mt-4"/>
            <h3 className="text-3xl font-bold flex justify-start items-start mt-4">FREE</h3>
            <div className="mt-4">
             <h3 className="flex justify-start items-start">Organize across all apps by</h3>
             <h3 className="flex justify-start items-start">hand</h3>
            </div>
            <img src="./price sec-.png" className="mt-4"/>
            <h6 className="flex justify-start items-start">Slate helps you see how</h6>
            <h6 className="flex justify-start items-start">many more days you need...</h6>
            <button className="mt-4 bg-orange-500 text-white hover:bg-orange-800 font-semibold py-2 px-16 rounded focus:outline-none focus:ring focus:ring-orange-400">
              Try for Free
            </button>
            <img src="./features-list.png" className="flex justify-center items-center mt-8"/>
          </div>

         </div>
       </div>
    </div>
  )
}

export default Hero3