export const initial_state = {
    name: '',
    email: '',
    message: ''
}

export const StateReducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        case 'SET_MESSAGE':
            return { ...state, message: action.payload };
        case 'RESET_FORM':
            return initial_state;
        default:
            return state;
    }
}