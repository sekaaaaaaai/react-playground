import React from 'react';

const Book = ({book, dispatch}) => {
  const handleClickDeleteButton = () => {
    const id = book.id
    dispatch({
      type: 'DELETE_BOOK', id
    })
  }
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.date}</td>
      <td>{book.description}</td>
      <td>
        <button type="button" className="btn btn-danger" 
        onClick={handleClickDeleteButton}>削除</button>
      </td>
    </tr>
  )

}


export default Book