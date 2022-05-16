// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const addCounter = () => {
    setCount(prevCount => prevCount +1)
  }

  const minusCounter = () => {
    setCount(prevCount => prevCount -1)
  }

  const addCounter1 = () => {
    setCount1(count1 => count1 +1)
  }

  const minusCounter2 = () => {
    setCount1(count1 => count1 -1)
  }

  return (
    <div className="App">
    <button
    onClick={addCounter}>+</button>
    <span>{count}</span>
    <button
    onClick={minusCounter}>-</button>
     <button
    onClick={addCounter1}>+</button>
    <span>{count1}</span>
    <button
    onClick={minusCounter2}>-</button>
    </div>
    
  );
}

export default App;
