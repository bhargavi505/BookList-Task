import { useState } from 'react'
import Books from "./Books.jsx"
import BooksList from './BooksList.jsx'
import {Route, Routes} from "react-router-dom"
import { Link } from "react-router-dom";
function App() {

  const [count, setCount] = useState(0)

  return (
    <>
  
    <nav>
      <div>
        <h1 className="text-5xl font-serif m-10"><Link to='/books'>List Of Books</Link></h1>
      </div>
    
    
    </nav>
    <Routes>
      <Route path='/books' element={<BooksList />} />
      <Route path='/books/:id' element={<Books />} />
      
    </Routes>

    
    </>
  )
}

export default App
