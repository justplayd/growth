const SET_NEXT_STATE = 'GAME/SET_NEXT_STATE';
const RESET_STATE = 'GAME/RESET_STATE';
const CHECK_STATE = 'GAME/CHECK_STATE';
// const ANSWER_FALSE = 'GAME/ANSWER_FALSE';

export const nextStep = (value) => ({
	type: SET_NEXT_STATE,
	payload: value
});

export const resetState = () => ({
	type: RESET_STATE
});

export const checkState = (value) => ({
	type: CHECK_STATE,
	payload: value
});
