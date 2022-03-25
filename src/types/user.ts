export interface UserState {
	users: any[];
	loading: boolean;
	error: null | string;
}
//  Dans typescript "typeof FETCH_USERS" return le type de cette constante si les constantes sont déclarées avec const .. avant
// ou utiliser enum:
export enum UserActionType {
	FETCH_USERS = "FETCH_USER",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}
export interface FetchUsersAction {
	type : UserActionType.FETCH_USERS;
}
export interface FetchUsersErrorAction {
	type : UserActionType.FETCH_USERS_ERROR;
	payload : string;
}
export interface FetchUsersSuccessAction {
	type : UserActionType.FETCH_USERS_SUCCESS;
	payload: any[];
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;
