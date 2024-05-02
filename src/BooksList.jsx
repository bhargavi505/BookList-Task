import React, { useEffect,useState} from 'react'
import {Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookData from './BookData';

const API="https://softwium.com/api/books";

const BooksList = () => {

    const [Books, setBooks]=useState([]);
    const [shouldFetch, setShouldFetch] = useState(true);

    const fetchBooks= async(url) =>{
      try{

      const response= await fetch(url);
      const data= await response.json();
      if(data.length>0){
        setBooks(data);
      }
    }

    catch (e){
      console.error(e);
    }

    }

    useEffect(() => {
      if (shouldFetch) {
        fetchBooks(API);
      }
      setShouldFetch(false);
    }, [shouldFetch]);

    const handleRefresh = () => {
      setShouldFetch(true);
    };


  return (
<>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5" onClick={handleRefresh}>Refresh Data</button>
<div className="container mx-auto sm:-mx-6 lg:-mx-8 w-screen" >
<div className="inline-block min-w-full shadow rounded-lg overflow-hidden" >
<table>
<thead>
    <th className="px-10 py-5 border-b-10 border-gray-200 bg-blue-200 text-center text-xl font-serif text-gray-700 uppercase tracking-wider" >ID</th>
    <th className="px-5 py-3 border-b-2 border-gray-200 bg-blue-200 text-left text-xl font-serif text-gray-700 uppercase tracking-wider">Book Name</th>
</thead>
<tbody  >
{
    Books.map((Book) => (
          <BookData key={Book.id} id={Book.id} title={Book.title} />
        ))
}
</tbody>

</table>
       
      

</div>    
</div>
</>
  )
}

export default BooksList
