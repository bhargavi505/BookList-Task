import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'

const BookData = ({id, title}) => {
  return (
    <tr>
      <td className="px-20 py-5 border-b-10 border-gray-200 bg-blue-50 text-md text-center font-serif">{id}</td>
      <td className="px-5 py-5 border-b border-gray-200 bg-blue-50 text-md text-left font-serif">
        <Link to={`/books/${id}`}>{title}</Link>
      </td>
    </tr>
  )
}

export default BookData
