import React from 'react'

function SearchBar({ searchitems }) {
  return (
    <div className="place-items-center mb-6">
        <div className="max-w-250 w-full h-10 rounded-2xl border-2 border-gray-300 p-2">
      <input onChange={searchitems} type="text" placeholder="Enter your name" className="outline-none border-none text-gray-800" />
    </div>
    </div>
  )
}
export default SearchBar;
