// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const addCounter = () => {
    setCount(prevCount => prevCount +1)
  }

  const minusCounter = () => {
    setCount(prevCount => prevCount -1)
  }

  return (
    <div className="App">
    <button
    onClick={addCounter}>+</button>
    <span>{count}</span>
    <button
    onClick={minusCounter}>-</button>
    </div>
    
  );
}

export default App;
