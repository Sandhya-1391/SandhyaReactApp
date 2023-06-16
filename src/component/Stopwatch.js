// import React, { useState, useEffect } from 'react'


// const Stopwatch = () => {
//   const [min, setMin] = useState(0)
//   const [sec, setSec] = useState(0)

//  let stop;

//   useEffect(() => {
//    stop = setTimeout(() => {
//       if (sec == 59) {
//         setMin(min + 1)
//         setSec(0)
//       }
//       else setSec(sec + 1)
//     }, 1000);


//   }, [sec])

//   const resetStopwatch = () => {
//     setMin(0)
//     clearTimeout(stop)
//     setSec(0)
//   }


//   return (
//     <div className='center' style={{ display: "flex", flexDirection: "column",background:"pink", height:"100vh"}}>

//       <h1 style={{ textAlign: "centre", }}>Timer</h1>
        
//       <div className='timer'>
//         <div className=''>
//           <p>min</p>
//           <p>{min < 10 && 0}{min}</p>
//         </div>
//         <div>
//           <p>sec</p>
//           <p>{sec < 10 && 0}{sec}</p>
//         </div>

//       </div>
//       <button Style={{ margin: "auto", }} onClick={resetStopwatch}>reset</button>
//     </div>

//   )
// }

// export default Stopwatch


import React from 'react'

const Stopwatch = () => {
  return (
    <div>Stopwatch</div>
  )
}

export default Stopwatch