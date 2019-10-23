import { FETCH_USERS, CHANGE_TEXT, CHANGE_PAGE } from './types';
import axios from 'axios';

export const fetchUsersAction = (currentPage, pageSize) => async (dispatch) => {
	try {
		const res = await axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}`);
		dispatch({
			type: FETCH_USERS,
			payload: res.data
		});
	} catch (error) {}
};

export const changeTextAction = (text) => {
	return {
		type: CHANGE_TEXT,
		payload: text
	}
};

export const changePageAction = (page, pageSize) => dispatch => {
	dispatch(fetchUsersAction(page, pageSize))
	dispatch({
		type: CHANGE_PAGE,
		payload: page
	})
}
