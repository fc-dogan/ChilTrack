const initState = {
  pointError: null
}

const kidsReducer = (state = initState, action) => {
  switch(action.type){
    case 'INCREMENT_SUCCESS':
      console.log('increment success')
      return {
        ...state,
        pointError: null
      }
    case 'INCREMENT_ERROR':
      console.log('increment error')
      return {
        ...state,
        pointError: action.err.message
      }

    case 'DECREMENT_SUCCESS':
      console.log('decrement success')
      return {
        ...state,
        pointError: null
      }
    case 'DECREMENT_ERROR':
      console.log('decrement error')
      return {
        ...state,
        pointError: action.err.message
      }

    default:
      return state
  }
}

  export default kidsReducer;
    