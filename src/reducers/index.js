// action = {
// type = 'CREATE_BOOK',
// date = '2020-04-18',
// description = 'あああああ'
// }

const books = (state = [], action) => {
  switch(action.type){
    case 'CREATE_BOOK':
      const book = { date: action.date, description: action.description }
      const id = (state.length === 0) ? 1 : state[state.length - 1].id + 1
      return [...state, { id, ...book }];
    case 'DELETE_BOOK':
      return state;
    case 'DELETE_ALL_BOOKS':
      return [];
          default:
      return state;
  }
}

export default books // componentが利用できるように