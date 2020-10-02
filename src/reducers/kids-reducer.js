const initState = {
  authError: null
}

const kidsReducer = (state = initState, action) => {
  switch(action.type){
    case 'INCREMENT_SUCCESS':
      console.log('increment success')
      return {
        ...state,
        authError: null
      }
    case 'INCREMENT_ERROR':
      console.log('increment error')
      return {
        ...state,
        authError: action.err.message
      }

    default:
      return state
  }
}

  export default kidsReducer;
    