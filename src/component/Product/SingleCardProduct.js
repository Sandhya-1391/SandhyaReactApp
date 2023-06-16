import React from 'react'

const SingleCardProduct = ({product}) => {
    let {title, description,thumbnail}=product

  return (
    <div class="card" style={{width: "18rem"}}>
  <img src={thumbnail} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href="#" class="btn btn-primary">Add To Card</a>
  </div>
</div>

   
  )
}

export default SingleCardProduct