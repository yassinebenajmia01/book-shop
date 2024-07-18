import React from 'react'


function DetailsBook({title,price,genre,author,description,img}) {
  return (
    <div className="w-100  h-[90%] flex-shrink-0  rounded border border-black mt-4 mr-4 ml-4 " >
      <div shadow={false} floated={false} className="h-96">
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover "
          
          
        />
      </div>
      
      <div>
      
          <p color="blue-gray" className="font-medium text-right">
            {price}$
          </p>
      </div>
      <div className="mb-2 flex items-center justify-between">
          <p color="blue-gray" className="font-medium">
          {title}
          </p>
          
      </div>
      
      <div>
        
        <p
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {description}
        </p>
      </div>
      <button
                ripple={false}
                fullWidth={true}
                className="bg-blue-500  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100  border-blue-gray-500 text-blue-gray-500 rounded px-3 py-1 mt-1 ml-1 "
               
              >
                Purschase
              </button>
      
     
    </div>



  )
}

export default DetailsBook