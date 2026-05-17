import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice';
function App() {

  //store 'nin içinde bulunan counter slicemdeki statei çek
  const { value } = useSelector ((store)=> store.counter);

  const dispatch = useDispatch()


  return (
   <div>
    <div>{value}</div>
    <div><button onClick={()=>dispatch(increment())}>Arttır </button>
  <button onClick={()=>dispatch(decrement())}>Azalt</button></div>
   </div>
  )
}

export default App
