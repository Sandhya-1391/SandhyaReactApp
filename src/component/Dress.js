import React from 'react'
import Dressdata from '../Dress.json'
import DressCard from './DressCard'
const Dress = () => {
    console.log(Dress)
  return (
    <div className='DressContainer'>
            {

                Dressdata.map(D =>{
                    return <DressCard Dress={D}/>

                })
            }
        </div>


  )
}

export default Dress