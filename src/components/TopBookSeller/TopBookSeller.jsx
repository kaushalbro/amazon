import React from 'react'
import "./TopBookSeller.css"

export default function TopBookSeller(props) {
    const top_book_link = props.link;
  return (
    <div  className='top_book'>
        <img src={top_book_link} alt="" />
    </div>
  )
}
