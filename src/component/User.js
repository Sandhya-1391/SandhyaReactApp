import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const param =useParams()
    console.log(param)
  return (
<h1>user id is:{param.myid}</h1>

  )
}

export default User