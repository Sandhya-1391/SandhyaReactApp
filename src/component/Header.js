import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <>
   
    {/* <div className="logo">
       Apna_Grocery
       <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2Fevery-community-needs-grocery-store-services-kermit-farmer&psig=AOvVaw06ljWxhtjxcgfe-XI3soxe&ust=1686166452977000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOD0rtWxr_8CFQAAAAAdAAAAABAJ" alt="grocery" />  

    </div> */}
      <Menu/>
      {
        darkMode ? <button onClick={toggleDarkMode}>Enable LightMode</button> :
          <button onClick={toggleDarkMode}>Enable DarkMode</button>
      }


      
    </>
  )
}

export default Header