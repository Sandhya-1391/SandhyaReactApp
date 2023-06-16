import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = ({ darkMode, setDarkMode }) => {

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // }

  return (
    <div className={darkMode ? "darkNav" : "lightNav"}>
      <NavLink className={darkMode ? "darkLink" : "lightLink"} to={"/"}><span>Home</span>        </NavLink>
      <NavLink className={darkMode ? "darkLink" : "lightLink"} to={"/Stopwatch"}><span>Stopwatch</span></NavLink>
      <NavLink className={darkMode ? "darkLink" : "lightLink"} to={"/Counter"}><span>Counter</span></NavLink>
      <NavLink className={darkMode ? "darkLink" : "lightLink"} to={"/textEditor"}><span>TextUtilsForm</span></NavLink>
      <NavLink className={darkMode ? "darkLink" : "lightLink"} to={"/user/123"}><span></span>user123</NavLink>
      <NavLink className={darkMode ? "darkLink" : "lightLink"} to={'/Dress'}><span></span>Dress</NavLink>
      <NavLink className={darkMode ? "darkLink" : "lightLink"} to={'/product'}><span>product</span></NavLink>
    </div>
  )
}

export default Menu