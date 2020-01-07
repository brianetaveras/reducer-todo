export const initialState = {
    item: 'Learn about reducers',
  completed: false,
  id: 3892987589
  };


export const itemReducer = (state, action) =>{
    switch(action.type){
      case "COMPLETE":
        return {...state, completed: !state.completed};
      default:
        return state;
    }
}