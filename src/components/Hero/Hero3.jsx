const Hero3 = () => {
  return (
    <div className="relative">
       <div className="flex-col p-20 justify-center">
        <h6 className="flex justify-start items-start text-orange-500 xs:justify-center md:justify-start">Practice Advice</h6>
        <h6 className="flex justify-start items-start font-bold text-3xl xs:justify-center md:justify-start">Watch our Courses</h6>
        <div>
          <h6 className="flex justify-start items-start xs:justify-center md:justify-start">Problems trying to resolve the conflict between</h6>
          <h6 className="flex justify-start items-start xs:justify-center md:justify-start">the two major realms of Classical physics: Newtonian mechanics</h6>
        </div>
       </div>

       {/* cards */}
    <div>

  <div className="w-full h-full xs:gap-y-8 lg:flex justify-around items-center gap-x-4" id="herocards">
  
          {/* first card */}

          <div className="bg-white p-20 transition-transform transform hover:scale-105 hover:shadow-md mb-8 flex-shrink-2">
  <div className="flex flex-col items-center sm:items-center lg:items-start ">
    <img
      className="mt-4 sm:mt-0 md:mt-0 sm:mb-4 md:mb-4"
      src="circle sec-1.png"
      alt="Image Alt Text"
    />
    <h3 className="text-3xl font-bold mt-4 sm:mt-0 md:mt-0">FREE</h3>
    <div className="mt-4">
      <h3>Organize across all apps by</h3>
      <h3>hand</h3>
    </div>
    <div className="flex flex-col items-center sm:items-center md:items-start mt-4">
      <img
        src="/price sec-.png"
        className="sm:mt-4 md:mt-0 sm:mb-4 md:mb-0"
        alt="Image Alt Text"
      />
      <h6>Slate helps you see how</h6>
      <h6>many more days you need...</h6>
    </div>
    <button className="mt-4 bg-orange-500 text-white hover:bg-orange-800 font-semibold py-2 px-16 rounded focus:outline-none focus:ring focus:ring-orange-400">
      Try for Free
    </button>
    <img
      src="/features-list.png"
      className="mt-8 flex justify-center items-center"
      alt="Image Alt Text"
    />
  </div>
</div>
     
 
          {/* second card */}
          <div className="bg-white p-20 transition-transform transform hover:scale-105 hover:shadow-md mb-8 flex-shrink-2">
  <div className="flex flex-col items-center sm:items-center lg:items-start">
  <img src="./circle float off sec- 9.png" className="absolute top-0 right-0"/>

    <img
      className="mt-4 sm:mt-0 md:mt-0 sm:mb-4 md:mb-4"
      src="circle sec-1.png"
      alt="Image Alt Text"
    />
    <h3 className="text-3xl font-bold mt-4 sm:mt-0 md:mt-0">FREE</h3>
    <div className="mt-4">
      <h3>Organize across all apps by</h3>
      <h3>hand</h3>
    </div>
    <div className="flex flex-col items-center sm:items-center md:items-start mt-4">
      <img
        src="/price sec-.png"
        className="sm:mt-4 md:mt-0 sm:mb-4 md:mb-0"
        alt="Image Alt Text"
      />
      <h6>Slate helps you see how</h6>
      <h6>many more days you need...</h6>
    </div>
    <button className="mt-4 bg-orange-500 text-white hover:bg-orange-800 font-semibold py-2 px-16 rounded focus:outline-none focus:ring focus:ring-orange-400">
      Try for Free
    </button>
    <img
      src="/features-list.png"
      className="mt-8 flex justify-center items-center"
      alt="Image Alt Text"
    />
  </div>
</div>



          {/* third card */}
          <div className="bg-white p-20 transition-transform transform hover:scale-105 hover:shadow-md mb-8 flex-shrink">
  <div className="flex flex-col items-center sm:items-center lg:items-start">
    <img
      className="mt-4 sm:mt-0 md:mt-0 sm:mb-4 md:mb-4"
      src="circle sec-1.png"
      alt="Image Alt Text"
    />
    <h3 className="text-3xl font-bold mt-4 sm:mt-0 md:mt-0">FREE</h3>
    <div className="mt-4">
      <h3>Organize across all apps by</h3>
      <h3>hand</h3>
    </div>
    <div className="flex flex-col items-center sm:items-center md:items-start mt-4">
      <img
        src="/price sec-.png"
        className="sm:mt-4 md:mt-0 sm:mb-4 md:mb-0"
        alt="Image Alt Text"
      />
      <h6>Slate helps you see how</h6>
      <h6>many more days you need...</h6>
    </div>
    <button className="mt-4 bg-orange-500 text-white hover:bg-orange-800 font-semibold py-2 px-16 rounded focus:outline-none focus:ring focus:ring-orange-400">
      Try for Free
    </button>
    <img
      src="/features-list.png"
      className="mt-8 flex justify-center items-center"
      alt="Image Alt Text"
    />
  </div>
</div>


         </div>
       </div>
    </div>
  )
}

export default Hero3


