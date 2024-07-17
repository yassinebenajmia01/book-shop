import React from 'react'


export default function Bookshow({title,price,genre,author,description,img}) {

  return (
    <>
    <div className="w-96  h-[54%] flex-shrink-0  rounded border border-black mt-4 mr-4 ml-4 " >
      <div shadow={false} floated={false} className="h-96">
        <img
          src={img}
          alt="card-image"
          className="h-full w-full object-cover "
          
          
        />
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
      <div>
      
          <p color="blue-gray" className="font-medium text-right">
            {price}$
          </p>
      </div>
     
    </div>


  </>
  )
}


