const Hero1b = () => {
  return (
    <div>
        <div className="md:flex justify-center mt-40">
            <img src="./thumb-concept.png"/>
            <div className="mt-20">
                <img src="./long.png" className="mb-12 md:flex justify-start"/>
                <h3 className="text-4xl font-bold md:flex justify-start">Get Quality</h3>
                <h3 className="text-4xl font-bold md:flex justify-start mb-12">Education</h3>
                <div>
                <h3 className="md:flex justify-start">Problems trying to resolve the conflict between</h3>
                <h3 className="md:flex justify-start">the two major realms of Classical physics:</h3>
                <h3 className="md:flex justify-start">Newtonian mechanics </h3>
                </div>
                <h3 className="text-orange-500 hover:text-orange-900 mt-16 md:flex justify-start"><a href="#">Learn More {'>'}</a></h3>
            </div>
        </div>

            <div className="md:flex justify-around items-center mt-12">
                <img src="./col-md-2 sec-1.png"/>
                <img src="./col-md-2 sec-2.png"/>
                <img src="./col-md-2 sec-3.png"/>
                <img src="./col-md-2 sec-4.png"/>
                <img src="./col-md-2 sec-5.png"/>
                <img src="./col-md-2 sec-6.png"/>
            </div>
    </div>
  )
}

export default Hero1b