import React from 'react'



const SingleCard = ({data}) => {

    let {Name,Father_Name,Mother_Name,Education}=data
  return (
  <>
   <div className='Singledata'>
   <p>
    Name:{Name}
    </p>
    <p>
        Father Name:{Father_Name}
    </p>
    <p>
        Mother Name:{Mother_Name}
    
    </p>
    <p>
        Eduacation:{Education}
    </p>
   </div>
  </>

 
  )
}

export default SingleCard