import { useState,useCallback ,useEffect,useRef} from 'react'
//useCallback uses concept of memioization



function App() {

  const [length,setLength]=useState(8);
  
  const [numberAllowed,setNumberAllowed]=useState(false);
 
  const [charAllowed,setCharAllowed]=useState(false);
 
  const [password,setPassword]=useState("")//password generate karaege 
 
 //refhook for copying used to get refrence of any variavle here for copy function we are using it

 const passowrdref=useRef(null)
 
 //  making password generator method
 
 const passwordGenerator= useCallback(()=>
 {
   let pass="";
 
   let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzmnxbcv";
 
 
 
   if(numberAllowed)
   {
     str+="0123456789"
   }
   if(charAllowed)
   {
     str+="}{:?/&*%$#@";
   }
   
 
 
   for(let i=1;i<=length;i++)
   {
     let char = Math.floor(Math.random()*str.length+1) //0th value na aye isliye + 1 karlia ye generate karega random number
 
 
     pass +=str.charAt(char); 
     
     //ye method hoti hei string ke paas jo index pe jo char hei bo utha ke dedeti hei
   }
 
   setPassword(pass);
   
   //yaha pe humei password milgya aur set password mei pass kardia aur setpassword isko password mei set karddaga
 
 },[length,numberAllowed,charAllowed,setPassword])//dependencies in in pe depend karega pass word
 


 
 const copyPasswordToClipBoard= useCallback(()=>{
  window.navigator.clipboard.writeText(password);
  passowrdref.current?.select()//all selected text will be highlighted
  passowrdref.current?.setSelectionRange(0,9)//to select ranged value that we pass here range

})//method for copy




 useEffect(()=>
 {
 passwordGenerator();
 },[passwordGenerator])
 


 
   return (
     <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-800 bg-gray-500'>

       <h1 className='text-center py-2 text-2xl text-white'>PASSWORD GENERATOR</h1>


         <div className='flex shadow rounded-lg  overflow-hidden mb-4'>
         <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passowrdref}//this will work only on this input field
         />
        
         <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipBoard}>COPY</button>

         </div>
    
   
         <div className='flex text-sm gap-x-2'>
             <div className='flex items-center gap-x-1'>
             <input type='range' 
             min={6}
             max={100}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{setLength(e.target.value)}}  //isse length ki value change hogi 
             ></input>
             <label>Length:{length}</label>
             </div>



             <div className='flex items-center gap-x-1'>
             <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={()=>{setNumberAllowed((prev)=>!prev)}}
             />
             <label>Numbers</label>


             <input
              type='checkbox'
              defaultChecked={charAllowed}
              id='character'
              onChange={()=>{setCharAllowed((prev)=>!prev)}}
             />
             <label>Characters</label>
             </div>


         </div>


       </div>
          
     </>
   )
 }
 
 
 
 
 
 
 
 
export default App
