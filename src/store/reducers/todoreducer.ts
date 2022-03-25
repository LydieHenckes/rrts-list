import { TodoActionTypes, TodoState, TodoAction } from "../../types/todo";

const initialState : TodoState = {
	todos: [],
	loading: false,
	error: null,
	page: 1,
	limit: 10
}

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
	switch (action.type) {
		case TodoActionTypes.FETCH_TODOS:
			return {...state, loading: true, todos: []}
		case TodoActionTypes.FETCH_TODOS_SUCCESS:
			return {...state, loading: false, todos: action.payload}
		case TodoActionTypes.FETCH_TODOS_ERROR:
			return {...state, loading: false, error: action.payload, todos: []}
		case TodoActionTypes.SET_TODO_PAGE:
			return {...state, loading: false, page: action.payload}
		default: 
			return state;
	}
}