import React ,{useState} from 'react'
import RegularBtn from './RegularBtn'
function TextUtilsForm() {
    const [inpt, setInpt] = useState("")
    function changeToUppercase(){
        setInpt(inpt.toUpperCase())
    }
    function changeToLowercase(){
        setInpt(inpt.toLowerCase())
    }
    function changeToClearspace(){
        let regx =/\s+/g
        setInpt(inpt.replace (regx," "))
    }
    
    function handleChange(e) {
       setInpt(e.target.value)
    }
  
  return (
   <div className="mb-3">
   <label htmlFor="exampleFormControlTextarea1" className="form-label">TextUtils</label>
   <textarea value={inpt} onChange={handleChange} className="form-control border-black" rows="10"></textarea>
   <div>
    <RegularBtn buttonCopy={'change to uppercase'} handleFunc={changeToUppercase}/>
    <RegularBtn buttonCopy={'change to lowercase'} handleFunc={changeToLowercase}/>
    <RegularBtn buttonCopy={'change to clearspace'}handleFunc={changeToClearspace}/>

   </div>
 </div>
 
  
 
  )
}

export default TextUtilsForm