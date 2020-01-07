export const initialState = {
    title: 'Hello',
    editing: false
  };


export const titleReducer = (state, action) =>{
    switch(action.type){
      case "EDITING":
        return {...state, editing: true};
      case "UPDATE_TITLE":
        return {...state, title: action.payload, editing: false};
      default:
        return state;
    }
}