import { useDispatch, useSelector } from "react-redux"
import {increment, decrement, selectCount} from './counterSlice'


function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{count}</h1>
      <button
      onClick={() => dispatch(increment())}
      >Increase</button>


      <button
      onClick={()=> dispatch(decrement())}
      >decrease</button>
    </div>
  )
}

export default App
