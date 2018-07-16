
const initialState = {
    isReady : false,
    books : [],
    filterBy : 'ALL',
    searchValue : []
}
const bookReducer = (state = initialState,action) => {
  switch(action.type){
      case "SET_BOOKS" : {
        return {
            ...state,
            isReady : true,
            books : action.payload
        }
      }
      case 'FILTER_BOOKS' : {
          return {
              ...state,
              filterBy : action.payload

          }
      }
      case 'SEARCH' : {
          return {
              ...state,
              searchValue : action.payload
          }
      }
      default : {
          return state
      }
  }
}

export default bookReducer;