import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Book from './Book'
import reducer from '../reducers/index.js';

const App = props => {
  const [state, dispatch] = useReducer(reducer, [])
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const addBook = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_BOOK',
      date,
      description,
    })

    setDate(''); setDescription('')
  }


  return (
    <React.Fragment>
      <div className="container-fluid">
        <h4>予約フォーム</h4>
        <form>
          <div className="form-group">
             <label htmlFor="formBookDate">日付</label>
             <input className="form-control" id="formBookDate" value={date} 
             onChange={e => setDate(e.target.value)}></input>
          </div>
          <div className="form-group">
            <label htmlFor="formBookDescription">説明</label>
            <input className="form-control" id="formBookDescription" 
            value={description} onChange={e => setDescription(e.target.value)}></input>
          </div>
          <button className="btn btn-primary" onClick={addBook}>予約追加</button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">date</th>
              <th scope="col">description</th>
            </tr>
          </thead>
          <tbody>
            {state.map((book, index) => (<Book key={index} book={book} dispatch={dispatch}></Book>))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

App.defaultProps = {
  name: 'sakai',
  price: 1000
}

export default App;
