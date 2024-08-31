import { useState } from 'react'
import { toppings } from './data.js'

function App() {
  // console.log(toppings)
  const [result, setResult] = useState(0)
  const [toppingOut, setToppingOut] = useState([])
  const [show, setShow] = useState([])

  
  
  
  const checkStatus = (e,named,index) => {
    console.log(index)
    if (e.target.checked == true) {
      setResult(result + +e.target.value)
      setToppingOut(prv => [...prv,{name:named,price:e.target.value}])
    } else { 
      setResult(result - +e.target.value)
      setToppingOut(prv=>prv.filter(el=>el.name!=named))
    }
    
  }



  const hdlclick = (e) => {
    e.preventDefault()
    console.log(toppingOut)
    setShow(toppingOut)
  }

  

  return (
    <div className='p-5'>
      <h1 className='text-3xl font-bold pb-3'>Select Topping</h1>
      <div className='border-2 p-3'>
        <div>
          {toppings.map((el,index) => (
            <div key={index}  className="flex justify-between border-red-300 text-center">
              <div>
                <label>
                <input key={index} className='m-1' value={el.price} type="checkbox" onChange={(e)=>checkStatus(e,el.name,index)} />
                {el.name}</label>
              </div>
              <label>{el.price.toFixed(2)}</label>
            </div>
          ))}
          </div>
        <div className='flex justify-between'>
          <h2>Total</h2>
          <h2 className='border-t-2'>{result.toFixed(2)}</h2>
        </div>
        </div>
        <button className='border-2 border-black rounded mt-4' onClick={hdlclick}>check out</button>
        <hr/>
        {show.map((el,index)=> (
          <p key={index}> name: {el.name} Price:{el.price} </p>
        ))}
    </div>
  )
}

// function ShowFinal({hdlclick}){
//     const hdlclick = (e) => {
//       e.preventDefault()
//       // console.log("hi")
     
//       return (
        
//           <div>
//             {toppingOut.map(el= <h1>{el}</h1>)}
//           </div>
        
//       )
//     }
// }


export default App
