import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = props => {
  const [state, setState] = useState(props)
  const { price, name } = state
  
  useEffect(() => {
    console.log("This is like componentDidMount or componentUpdate.")
  })
  useEffect(() => {
    console.log("This is like componentDidMount")
  }, [])
  useEffect(() => {
    console.log("This callback is for name only.")
  }, [name])
  const renderPeriod = () => {
    console.log('renderPeriod renders period.')
    return '。'
  }
  
  const reset = () => {
    // setPrice(props.price)
    // setName(props.name)
    setState(props)
  }

  return (
    <React.Fragment>
      {/* <p>現在の{name}は、{price}円です{renderPeriod()}</p>
      <button className="btn btn-primary" onClick={ () => setState({...state, price: price + 100}) }>+100</button>
      <button onClick={ () => setState({...state, price: price - 100}) }>-100</button>
      <button onClick={ reset }>Reset</button>
      <input value={name} onChange={ e => setState({ ...state, name: e.target.value }) }/> */}
      <div className="container-fluid">
        <h4>イベント作成フォーム</h4>
        <button type="button" className="btn btn-primary">Primary</button>
        <form>
          <div className="form-group">
             <label htmlFor="formEventTitle">タイトル</label>
             <input className="form-control" id="formEventTitle"></input>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  name: 'sakai',
  price: 1000
}

export default App;
