import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Books = () => {
    const [Book,setBook]=useState([])

    const { id }= useParams();
    const API=`https://softwium.com/api/books/${id}`;

    const fetchBook= async(url) =>{
     try{
        
        const response= await fetch(url);
        const data= await response.json();
        console.log(data);
        setBook(data);

      }
     catch (e){
        console.error('Error fetching book:', e);

     }
    }

    useEffect(() =>{ fetchBook(API); },[{id}])
    const thClasses="px-20 py-10 border-b-15 border-gray-200 bg-gray-100 text-left text-xl font-serif text-gray-700 uppercase tracking-wider";
   
  return (
    <>
    <div className="container mx-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
     <table>
  <tr>
    <th className="px-20 py-10 border-b-15 border-gray-200 bg-blue-200 text-center text-xl font-serif text-gray-700 uppercase tracking-wider">ID</th>
    <th className="px-20 py-10 border-b-15 border-gray-200 bg-blue-200 text-center text-xl font-serif text-gray-700 uppercase tracking-wider">Title</th>
    <th className="px-20 py-10 border-b-15 border-gray-200 bg-blue-200 text-center text-xl font-serif text-gray-700 uppercase tracking-wider">ISBN</th>
    <th className="px-20 py-10 border-b-15 border-gray-200 bg-blue-200 text-center text-xl font-serif text-gray-700 uppercase tracking-wider">PageCount</th>
    <th className="px-20 py-10 border-b-15 border-gray-200 bg-blue-200 text-center text-xl font-serif text-gray-700 uppercase tracking-wider">Authors</th>
  </tr>
  <tr>
    <td className="px-20 py-5 border-b-20 border-gray-200 bg-blue-50 text-sm text-center font-serif">{Book.id}</td>
    <td className="px-5 py-5 border-b border-gray-200 bg-blue-50 text-sm text-center  font-serif">{Book.title}</td>
    <td className="px-5 py-5 border-b border-gray-200 bg-blue-50 text-sm text-center font-serif">{Book.isbn}</td>
    <td className="px-5 py-5 border-b border-gray-200 bg-blue-50 text-sm text-center font-serif">{Book.pageCount}</td>
    <td className="px-5 py-5 border-b border-gray-200 bg-blue-50 text-sm text-center font-serif">{Book.authors}</td>
  </tr>
</table>
</div>
</div>
    </>
  )
}

export default Books
