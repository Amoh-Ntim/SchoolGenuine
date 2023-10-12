const Hero2 = () => {
  return (
    <div className="bg-blue-950 mt-16 w-full">
  <div className="flex-col justify-start px-8 md:px-80 pt-20">
    <h6 className="flex justify-start items-start text-orange-500 mb-8">Practice Advice</h6>
    <h6 className="flex justify-start items-start text-5xl text-white font-bold mb-8">Our Popular Courses</h6>
    <div className="flex flex-col justify-start items-start text-sm text-white">
      <h6 className="flex justify-start">Problems trying to resolve the conflict between</h6>
      <h6 className="flex justify-start">the two major realms of Classical physics: Newtonian mechanics</h6>
    </div>
  </div>

  {/* cards */}
  <div className="flex justify-center items-center gap-8 py-32">
    <img className="w-1/4 transition-transform transform hover:scale-105 hover:shadow-md" src="./Product card.png" />
    <img className="w-1/4 transition-transform transform hover:scale-105 hover:shadow-md" src="./Product card 2.png" />
    <img className="w-1/4 transition-transform transform hover:scale-105 hover:shadow-md" src="./Product card 3.png" />
  </div>
</div>

  )
}

export default Hero2