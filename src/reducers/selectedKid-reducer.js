

export default (state =null, action) => {
  const { name, totalPoint, id } = action
    switch(action.type){
      case 'SELECTED_KID':
      const newState = {
        name: name,
        totalPoint: totalPoint,
        id: id
      }
      return newState;
    default: 
     return state;
  }
}
