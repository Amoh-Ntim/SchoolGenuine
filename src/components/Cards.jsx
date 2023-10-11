const Cards = () => {
  return (
    <div className="flex mt-8 gap-4 relative">
     {/* first card */}
    <div className="flex-col w-80 h-72 bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-md">
      <img src="./fixed-width sec-.png" className="h-16 w-16" />
      <h2 className="text-xl font-bold flex justify-start mt-8">Expert Instruction</h2>
      <img src="fixed-width fixed-height sec-.png" className="mt-8"/>
      <div className="text-gray-500 mt-8">
        <h6 className="flex justify-start">The gradual accumulation of </h6>
        <h6 className="flex justify-start">information about atomic and</h6> 
        <h6 className="flex justify-start">small-scale behaviour...</h6>
      </div>
    </div>

    {/* second card */}
    <div className="flex-col w-80 h-72 bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-md">
      <img src="./fixed-width sec-2.png" className="h-16 w-16" />
      <h2 className="text-xl font-bold flex justify-start mt-8">Training Courses</h2>
      <img src="fixed-width fixed-height sec-.png" className="mt-8"/>
      <div className="text-gray-500 mt-8">
        <h6 className="flex justify-start">The gradual accumulation of </h6>
        <h6 className="flex justify-start">information about atomic and</h6> 
        <h6 className="flex justify-start">small-scale behaviour...</h6>
      </div>
    </div>

    {/* third card */}
    <div className="flex-col w-80 h-72 bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-md">
      <img src="./fixed-width sec-3.png" className="h-16 w-16" />
      <h2 className="text-xl font-bold flex justify-start mt-8">Lifetime Access</h2>
      <img src="fixed-width fixed-height sec-.png" className="mt-8"/>
      <div className="text-gray-500 mt-8">
        <h6 className="flex justify-start">The gradual accumulation of </h6>
        <h6 className="flex justify-start">information about atomic and</h6> 
        <h6 className="flex justify-start">small-scale behaviour...</h6>
      </div>
    </div>

    </div>
  )
}

export default Cards