import items from '../items.json';

const SET_NEXT_STATE = 'GAME/SET_NEXT_STATE';
const ANSWER_FALSE = 'GAME/ANSWER_FALSE';
const RESET_STATE = 'GAME/RESET_STATE';

const initialState = {
	keyItemInit: items.init,
	point: 2,
	items,
	value: { ...items[items.init] },
	keyItem: items.init
};

// eslint-disable-next-line default-param-last
const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_NEXT_STATE:
			return {
				...state,
				value: {
					...items[action.payload * state.point]
				},
				keyItem: action.payload * state.point
			};
		case ANSWER_FALSE:
			return {
				...initialState
			};
		case RESET_STATE:
			return {
				...initialState
			};
		default:
			return state;
	}
};

export default rootReducer;
