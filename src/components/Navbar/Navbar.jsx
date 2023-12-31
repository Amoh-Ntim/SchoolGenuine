const Navbar = () => {
  return (
    <div className="overflow-hidden">
      <img src="background sec-.png" className="absolute top-0 left-0 w-full h-auto flex-shrink-1"/>
      <nav className="bg-ash text-ash p-4 flex justify-around items-center relative">
        {/* <div className="h-full w-1/8 bg-blue-800 top-0 left-0 text-blue-800">
         he
        </div> */}

        <div className="flex items-center">
          <div className="text-black font-bold text-2xl">Brandname</div>
        </div>
  
        <div className="flex items-center space-x-4">
          <a href="/" className="text-ash hover:text-blue-300">Home</a>
          <a href="/products" className="text-ash hover:text-blue-300">Product</a>
          <a href="/pricing" className="text-ash hover:text-blue-300">Pricing</a>
          <a href="/contact" className="text-ash hover:text-blue-300">Contact</a>
        </div>
  
          <div className="relative">
            <a href="/login" className="text-orange-400 hover:text-blue-300 mr-8 ">Login</a>
            <button className="bg-orange-600 text-white py-2 px-4 rounded  hover:bg-white hover:text-orange-500 ">Join Us</button>
          </div>
        {/* </div> */}
      </nav>
    </div>
  )
}

export default Navbar