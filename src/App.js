import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCounter, decCounter } from './redux/actions/counter'
import { changeStr } from './redux/actions/string';

import { getUser } from './redux/actions/user'
import { useState } from 'react';
// import { useEffect } from 'react';

function App() {

  const counter = useSelector( state => state.counter.number )
  const users = useSelector( state => state.user.user)
  const string = useSelector( state => state.string.value )
  const dispatch = useDispatch()

  const [stringVal, setStringVal] = useState()

  const handleAddCounter = () => dispatch(addCounter())
  const handleDecCounter = () => dispatch(decCounter())
  const handleChangeStr = (value) => {
    if(stringVal) {
      dispatch(changeStr(value))
    } else {
      window.alert('enter some input string to change')
    }
  }
  const handleResetStr = (value) => dispatch(changeStr(value))

  // useEffect(() => {
        
  // }, [])

  return (
    <div className="App">   

      <div>Counter : {counter}</div>
      <button onClick = { () => handleAddCounter() }>Add Counter</button>
      <button onClick = { () => handleDecCounter() }>Dec Counter</button>

      <div>String: {string}</div>
      <input value={stringVal} onChange={(e) => setStringVal(e.target.value)}/>
      <button onClick= { () => handleChangeStr(stringVal) }>Change String</button> 
      <button onClick ={ () => handleResetStr('hello') }>Reset</button> 

      <div>
        <button onClick={ () => dispatch(getUser()) }>Get User</button>
      </div>      

      {users && users.map((user, i) => {
        return <div key={i}>{user.name}</div>
      })}
    </div>
  );
}

export default App;
