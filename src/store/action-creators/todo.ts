import axios from "axios"
import { Dispatch } from "react"
import { TodoAction, TodoActionTypes } from "../../types/todo"

export const fetchTodos = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			dispatch({type: TodoActionTypes.FETCH_TODOS})
			console.log('ici');
			
			const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
				params: {_page: page, _limit: limit}
			})
			console.log(response.data);
			
	
			setTimeout(()=> {
				dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
			}, 500)
			
	//		dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})

} catch (e) {
			dispatch({
				type: TodoActionTypes.FETCH_TODOS_ERROR, 
				payload: 'Une erreur est survenu : '+e 
			})
		}
	}
}

export function setTodoPage(page: number): TodoAction {
	return {
		type: TodoActionTypes.SET_TODO_PAGE,
		payload: page
	}
}