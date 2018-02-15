import constants from '../constants'

const initialState = {
  data: null,
  isLoading: false
}

export default function userUpdate(state = initialState, { type, payload }) {
	switch (type) {
		case constants.USER_LOGGING_IN:
			return { ...initialState, isLoading: true }
		case constants.LOGIN_USER_SUCCESS:
			return { data: payload, isLoading: false }
		case constants.LOGOUT_USER:
			return initialState
		default:
			return state
	}
}
