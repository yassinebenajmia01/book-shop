import React, { useState } from 'react'
import Bookshow from '../Component/Bookshow'
import { getStory } from '../api/api'
import{ useEffect } from 'react';
import { useApi } from '../context/apiContext';

function Listbook() {
 const { book, stories }=  useApi()
 console.log("sss",stories)
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