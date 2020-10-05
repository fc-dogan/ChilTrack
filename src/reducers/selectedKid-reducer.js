

const  selectedKidReducer = (state =null, action) => {
  const { name, totalPoint, id } = action
    switch(action.type){
      case 'SELECTED_KID':
        console.log("select kid" + name + totalPoint + id)
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

export default selectedKidReducer 
