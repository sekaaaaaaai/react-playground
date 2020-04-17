import React, { useState } from 'react';

const App = props => {
  const [state, setState] = useState(props)
  const { price, name } = state
  // const [name, setName] = useState(props.name)
  // const [price, setPrice] = useState(props.price)
  
  const reset = () => {
    // setPrice(props.price)
    // setName(props.name)
    setState(props)
  }

  return (
    <React.Fragment>
      <p>現在の{name}は、{price}円です</p>
      <button onClick={ () => setState({...state, price: price + 100}) }>+100</button>
      <button onClick={ () => setState({...state, price: price - 100}) }>-100</button>
      <button onClick={ reset }>Reset</button>
      <input value={name} onChange={ e => setState({ ...state, name: e.target.value }) }/>
    </React.Fragment>
  );
}

App.defaultProps = {
  name: 'sakai',
  price: 1000
}

export default App;
