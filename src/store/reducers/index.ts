import { combineReducers } from "redux";
import { todoReducer } from "./todoreducer";
import { userReducer } from "./userreducer";

export const rootReducers = combineReducers({
	user: userReducer,
	todo: todoReducer,
})

// для работы с типизированным useSelector
export type RootState = ReturnType<typeof rootReducers>