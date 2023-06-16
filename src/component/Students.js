import React from 'react'
import Data from '../Data.json'
import SingleCard from './SingleCard'

const Students = () => {
    console.log(Data)
    return (
        <div className='StudentContainer'>
            {

                Data.map(d =>{
                    return <SingleCard  data={d}/>

                })
            }
        </div>
    )
}

export default Students