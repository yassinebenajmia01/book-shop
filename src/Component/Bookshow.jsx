import React from 'react'


export default function Bookshow() {

  return (
    <div className="w-96  h-[54%] flex-shrink-0  rounded border border-black mt-4 mr-4 ml-4 " >
      <div shadow={false} floated={false} className="h-96">
        <img
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
          className="h-full w-full object-cover "
          
          
        />
      </div>
      <div className="mb-2 flex items-center justify-between">
          <p color="blue-gray" className="font-medium">
            Apple AirPods
          </p>
      </div>
      <div>
        
        <p
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          With plenty of talk and listen time, voice-activated Siri access, and
          an available wireless charging case.
        </p>
      </div>
      <div>
      
          <p color="blue-gray" className="font-medium text-right">
            $95.00
          </p>
      </div>
     
    </div>



  )
}


