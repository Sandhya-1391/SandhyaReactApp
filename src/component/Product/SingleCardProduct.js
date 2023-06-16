import React from 'react'

const SingleCardProduct = ({product}) => {
    let {title, description,thumbnail}=product

  return (
    <div class="card" style={{width: "18rem"}}>
  <img src={thumbnail} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <button>Add To Card</button>
  </div>
</div>

   
  )
}

export default SingleCardProduct