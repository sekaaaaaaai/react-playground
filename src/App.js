import React, { useState } from 'react';

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  
  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }

  return (
    <React.Fragment>
      <p>現在の{name}は、{price}です</p>
      <button onClick={ () => setPrice(price + 100) }>+100</button>
      <button onClick={ () => setPrice(price - 100) }>-100</button>
      <button onClick={ reset }>Reset</button>
      <input value={name} onChange={ e => setName(e.target.value) }/>
    </React.Fragment>
  );
}

App.defaultProps = {
  name: 'sasaasas',
  price: 1000
}

export default App;
