import React from 'react'
import TodoList from './components/TodoList'

const App = () => {
  const days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  return (
     <div className='days'>

       {
         days.map((day,index)=>(
           <div className='single-day' key={index}>
             <h2>{day}</h2>
             <TodoList localstorage={day} />

           </div>
         ))
       }
     </div>
  )
}

export default App

