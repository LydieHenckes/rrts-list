import axios from "axios"
import { Dispatch } from "react"
import { UserAction, UserActionType } from "../../types/user"

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({type: UserActionType.FETCH_USERS})
			const response = await axios.get('https://jsonplaceholder.typicode.com/users')
	
			setTimeout(()=> {
				dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})
			}, 500)
			
	//		dispatch({type: UserActionType.FETCH_USERS_SUCCESS, payload: response.data})

} catch (e) {
			dispatch({
				type: UserActionType.FETCH_USERS_ERROR, 
				payload: 'Une erreur est survenu : '+e 
			})
		}
	}
}

// https://jsonplaceholder.typicode.com/users