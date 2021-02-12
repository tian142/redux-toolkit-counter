import { useSelector } from "react-redux"
import {increment, decrement, selectCount} from './counterSlice'


function App() {
  const count = useSelector(selectCount)
  return (
    <h1>{count}</h1>

  )
}

export default App
