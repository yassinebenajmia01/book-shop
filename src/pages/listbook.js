import React from 'react'
import Bookshow from '../Component/Bookshow'
import { books } from '../Component/Db/db'

function Listbook() {
  
  return (
    <div >

        {books.map((book, index) => (
      <div  key={index}>

        <Bookshow 

          title={book.title}
          price={book.price}
          description={book.description}
          img={book.img} 
          genre={book.genre}
          author={book.author}
        /> 

      </div>



  ))}
  </div>
  )
}


export default Listbook