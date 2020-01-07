import React, { useState, useReducer } from "react";

import { titleReducer, initialState } from "../reducer/titleReducer";

const Title = () => {
  const [title, setTitle] = useState("ad");
  const [state, dispatch] = useReducer(titleReducer, initialState);
  const handleChanges = e => {
    setTitle(e.target.value);
  };

  return (
    <div className="title">
      {!state.editing ? (
        <h1 onClick={()=>{dispatch({type: "EDITING"});}}>{state.title}</h1>
      ) : (
          <form onSubmit={()=>{dispatch({type: 'UPDATE_TITLE', payload: title})}}
          >
              <input 
              className="title-input" 
              type="text" 
              value={title}
              onChange={handleChanges}
              />
          </form>
      )}
    </div>
  );
};

export default Title;
