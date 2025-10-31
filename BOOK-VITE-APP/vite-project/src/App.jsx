
import React from 'react'
import Book from './component/Book'
import './App.css'
import Header from './component/Header'

const App = () => {
     const data=[
      {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEBQtP7zN47B72HxXqY45kWbEI66QXPeR5w&s",title:"Physics",price:400
      },
      {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEBQtP7zN47B72HxXqY45kWbEI66QXPeR5w&s",title:"Maths",price:400
      },
      {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgEBQtP7zN47B72HxXqY45kWbEI66QXPeR5w&s",title:"Chemistry",price:400
      }

     ]
  return (
    <div>
      <Header></Header>
    <div></div>
    <div className='app'>
      {
      data.map((b,i)=> (
        <Book key={i} book={b}/>
      ))
      }
    </div>
    </div>
  )
}

export default App
