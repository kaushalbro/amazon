import React from 'react'
import "./TopBookSeller.css"

export default function TopBookSeller(links) {
    const top_book_link = links.link
  return (
    <div className='top_book'>
        <img src={top_book_link} alt="" />
    </div>
  )
}
