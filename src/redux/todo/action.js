
import { ADDTODO,TOOGLE_TODO,INC_OFFICIAL,INC_PERSONAL,INC_OTHER,INC_ALL, INC_TODO, INC_DONE, INC_IN_PROGRESS,DELETE_ALL_TODO,OBJECT_ID } from "./actionTypes";

export const UPDATE_TODOS_LOADING = "UPDATE_TODOS_LOADING";
export const UPDATE_TODOS = "UPDATE_TODOS";
export const UPDATE_TODOS_ERROR = "UPDATE_TODOS_ERROR";

export const addtodo=(payload)=>{
    return{
        type:ADDTODO,
        payload
    }
}
export const toggletodo=(payload)=>{
    return{
        type:TOOGLE_TODO,
        payload
    }
}
export const objectid=(payload)=>{
    return{
        type:OBJECT_ID,
        payload
    }
}
export const incall=(payload)=>{
    return{
        type:INC_ALL,
        payload
    }

}
export const incpersonal=(payload)=>{
    return{
        type:INC_PERSONAL,
        payload
    }

}

export const incofficial=(payload)=>{
    return{
        type:INC_OFFICIAL,
        payload
    }

}

export const incother=(payload)=>{
    return{
        type:INC_OTHER,
        payload
    }

}
export const inctodo=(payload)=>{
    return{
        type:INC_TODO,
        payload
    }

}
export const incdone=(payload)=>{
    return{
        type:INC_DONE,
        payload
    }

}
export const incprogress=(payload)=>{
    return{
        type:INC_IN_PROGRESS,
        payload
    }

}
export const cleartodo=(payload)=>{
    return{
        type:DELETE_ALL_TODO,
        payload
    }
}

export const updateTodosLoading = () => ({
    type: UPDATE_TODOS_LOADING
  });

  export const updateTodos = (payload) => ({
    type: UPDATE_TODOS,
    payload
  });
  
  export const updateTodosError = (payload) => ({
    type: UPDATE_TODOS_ERROR,
    payload
  });

export const updateTodosData = () => (dispatch) => {
    dispatch(updateTodosLoading());
    fetch(`http://localhost:8080/todos`)
      .then((res) => res.json())
      .then((res) => dispatch(updateTodos(res)))
      .catch(() => dispatch(updateTodosError()));
  };
  