import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    const { id } = useParams();

  return (
    <div>
      <h1>Item {id}</h1>
      <p>Description for item {id}</p>
    </div>
  )
}

export default ItemDetail;
