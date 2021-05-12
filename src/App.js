import './App.css';
import React,{ useState } from 'react'








// const App = () => {

//   const [state,setState] = useState([])
//   const [result,setResult] = useState("")
//   const arr = [100000,50000,20000,10000,5000,2000,1000]

//   const money = () =>{

//       const arr1 = [] 
     
//     for(let i = 0;i < arr.length;i++){

//       if (result % arr[i] == 0 && result != arr[i] ){  

//       let x = (Math.floor(result / arr[i]))

//       arr1.push(`${x}*${arr[i]}`)

//       }
//       if(result > 1000000){
              
//        alert("We Cant Change The Money")
//        alert("Please Enter The Money")
//         break;
//     }


//       }
//       setState(arr1)
//       setResult("")
//   }

//   const change = (e) =>{

//     setResult(e.target.value)
   
//   }

//   const Delete = (i) =>{
//       const result = state.slice()
//       result.splice(i,1)
//       return setState([...result])
//   }
 
//   // const img = (e) =>{
//   //     const {files} = e.target
//   //   const img1 = URL.createObjectURL(files[0])
//   //   e.currentTarget.parentElement.style.backgroundImage = 'url('+img1+')';  
//   // }
//  return(

//    <div>
     
//   <input type="file" onChange={img}></input>
//      <input  value = {result} onChange = {change} placeholder = "Please Enter The Money" className= "inp" type="number" />
//      <button onClick = {money} disabled = {result ? false : true} className = "btn">Change</button>
    

//      {state.map((e,i)=>{

//        return(
//         <ul className = "mas2">
          
//          <div className = "div">
         
//              <li className = "ul">{e}</li>
//              <button onClick = {()=>Delete(i)} className="del">Delete</button>
            
          
//          </div>
       
//          </ul>
//        )
     
//      })}
  
//    </div>
    
//  )
// }


// export default App;


