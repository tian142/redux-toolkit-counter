import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import {increment, decrement, incrementByAmount,incrementAsync, selectCount} from './counterSlice'


function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={() => dispatch(increment())}
      >Increase</button>

      <button
      onClick={()=> dispatch(decrement())}
      >decrease</button>

      <div>
        <input 
        value={incrementAmount}
        onChange={(e)=> setIncrementAmount(e.target.value)}
        />
        <button
        onClick={()=> dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >add value</button>

        <button
        onClick={()=> dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >add async</button>

      </div>
    </div>
  )
}

export default App
