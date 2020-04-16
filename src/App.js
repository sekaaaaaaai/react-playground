import React, { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0) // 引数＝初期値any 戻り：[any, f()] f()...anyを操作できる
  
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)

  const reset = () => setCount(0)
  const double = () => setCount(previousCount => previousCount * 2)
  const waru3 = () => setCount(previousCount => 
    (previousCount % 3 === 0) ? (previousCount / 3) : previousCount
  )
    

  return (
    <React.Fragment>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
      <div>
        <button onClick={double}>x2</button>
        <button onClick={waru3}>/3if3x</button>
      </div>
    </React.Fragment>
  );
}

export default App;
