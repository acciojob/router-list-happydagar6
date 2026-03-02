import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = () => {
    const items = [1, 2, 3, 4];
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
            <li key={index}>{item}
                <Link to={`/item/${index}`}>Item {index}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList;
