const ADD_POST = 'ADD_POST';
const UPDATE_FIELD = 'UPDATE_FIELD';

const initialState = {
	list: [],
	fieldValue: ''
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			state.list.push(action.message);
			state.fieldValue = '';
			return state;
		case UPDATE_FIELD:
			state.fieldValue = action.message;
			return state;
		default:
			return state;
	}
};

export const addPostActionCreator = text => ({ type: ADD_POST, message: text });
export const updateFieldActionCreator = text => ({ type: UPDATE_FIELD, message: text });

export default reducer;
