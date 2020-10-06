
const  selectedGoalsReducer = (state =null, action) => {
  const { kidId, goals } = action
    switch(action.type){
      case 'SELECTED_GOALS':
      const newState = {
        ...goals
      }
      return newState;
    default: 
     return state;
  }
}

export default selectedGoalsReducer 
