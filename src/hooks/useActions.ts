import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
//импортируем все action-creators
import ActionCreators from '../store/action-creators/index';

export const useActions = () => {
	const dispatch = useDispatch();
	
	return bindActionCreators(ActionCreators, dispatch);
}