import React, {useState} from 'react';

const UserStater = () => {
    const [count, setCount] = useState(0);

    const addCounter = () => {
      setCount(prevCount => prevCount +1)
    }
  
    const minusCounter = () => {
      setCount(prevCount => prevCount -1)
    }

    return (
      <div className="App">
        <div className="usestate">
          <h1>counter - useState</h1>
          <div className="container">
        <button onClick={addCounter}>+</button>
        <span>{count}</span>
        <button onClick={minusCounter}>-</button>
        </div>
        </div>
      </div>
    )    
}

export default UserStater;