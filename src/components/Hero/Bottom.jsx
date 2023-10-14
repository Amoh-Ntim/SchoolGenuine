const Bottom = () => {
  return (
    <div className="flex-col justify-center items-center mt-20 gap-8 xs:flex-col sm:flex-row">
    <div className="flex justify-center items-center mt-20 gap-8 xs:flex-col sm:flex-row">
        <div><img src="col-md-21.png" className="xs:px-20 sm:px-0"/></div>
        <div><img src="col-md-22.png" className="xs:px-20 sm:px-0"/></div>
        <div><img src="col-md-23.png" className="xs:px-20 sm:px-0"/></div>
        <div><img src="col-md-24.png" className="xs:px-20 sm:px-0"/></div>
        <div><img src="col-md-44.png" className="" id="contact"/></div>
    </div>


        <div className="md:flex justify-around bg-gray-100 py-4">
          <div>
           <h6>Made With Love By Figmaland All Right Reserved </h6>
          </div>
          <div className="flex xs:justify-center md:justify-around">
            <img src="ant-design_facebook-filled.png" className="mr-4"/>
            <img src="ant-design_instagram-outlined.png" className="mr-4"/>
            <img src="twitter.png" className=""/>
          </div>
        </div>
    </div>
  )
}

export default Bottom