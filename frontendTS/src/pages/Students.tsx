import React from 'react'
import { useParams } from 'react-router-dom';

function Students() {
  const { id } = useParams();
  return (
    <div>Students ID: {id}</div>
  )
}

export default Students