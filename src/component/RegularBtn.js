import React from 'react'

const RegularBtn = ({handleFunc, color,buttonCopy}) => {
  return (
    <button onClick={handleFunc} className="btn btn-primary" type="InputButton">{buttonCopy}</button>

  )
}

export default RegularBtn