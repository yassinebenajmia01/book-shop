import React, { useState } from 'react'
import Bookshow from '../Component/Bookshow'
import { getStory } from '../api/api'
import{ useEffect } from 'react';

function Listbook() {
  const[stories,Setstory]=useState([])
  useEffect(()=>{
    const Story=async()=>{
      try{
      const response= await getStory()
      console.log("first",response)
      Setstory(response)
      return response
    }catch(e){console.error("erreur",e)}
    }
    Story()
  },[])
  return (
    <div className='grid grid-cols-3 grid-rows-2'  >

        {stories.map((book, index) => (
      <div  key={index}>

        <Bookshow 

          title={book.name}
          price={book.id}
          description={book.createdAt}
          img={book.avatar} 
         
        /> 

      </div>



  ))}
  </div>
  )
}



export default Listbook