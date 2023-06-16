import React from 'react'

const DressCard = ({Dress}) => {
    let {Product_Detail, Material, Care, Sleeve_Styling, Price,img}= Dress
    console.log(Dress)
  return (
    <>
    <div className='DressMaterial'>
        <div className="dressimgcontainer">
            <img src={`${img}`} alt="" className='dressImg' />
        </div>
    <p>
        Product_Detail:{Product_Detail}

    </p>
    <p>
    Material:{Material}

    </p>
    <p>
    Care:{Care}
     </p>
     <p>
     Sleeve_Styling:{Sleeve_Styling}
     </p>
     <p>
     Price:{Price} 
     </p>
     </div>
    </>
 
  )
}

export default DressCard
