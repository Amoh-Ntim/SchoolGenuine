const Hero5 = () => {
  return (
    <div className="flex-col justify-center items-center mt-20">
        <h6 className="text-orange-500">Newsletter</h6>
        <h6 className="text-lg">Most Popular Courses</h6>
        <div className="text-sm">
         <h6>Problems trying to resolve the conflict between</h6>
         <h6>the two major realms of Classical physics: Newtonian mechanics</h6>
        </div>

        <div className="flex items-center justify-center mt-20 xs:flex flex-col md:flex-row gap-y-2">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-64 px-4 py-2 border border-gray-300 rounded focus:ring focus:ring-orange-300 focus:outline-none"
    id="contact"
  />
  <button
    type="submit"
    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-orange-400"
  >
    Subscribe
  </button>
</div>

    </div>
  )
}

export default Hero5