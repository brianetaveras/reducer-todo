import React, {useState, useReducer} from 'react';

import {titleReducer, initialState} from '../reducer/titleReducer';


const Title = () =>{

    const [title, setTitle] = useState('Title boiii');

    const [state, dispatch] = useReducer(titleReducer, initialState)

};

export default Title;