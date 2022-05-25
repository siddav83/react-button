import React,{useReducer} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {count: state.count + 1}
      case "decrement":
        return {count: state.count - 1}
     default:
       return state
    }
}

const UserReducer = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });


    function incrementer() {
      dispatch({type: "increment"});
    }
  
    function indrementer() {
      dispatch({type: "decrement"});
    }
  
    return (
      <div className="App">
        <div className="reducer">
        <h1>counter - useReducer</h1>
        <div className="container">
          <button onClick={incrementer}>-</button>
          <span>{state.count}</span>
          <button onClick={indrementer}>+</button>
        </div>
        </div>
      </div>
    );
  };


export default UserReducer;