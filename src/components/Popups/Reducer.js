export const ACTION_TYPE = {
    CHANGE_VALUE: 'CHANGE_VALUE',
}

export const Reducer = (state = {}, action) => {
    switch (action.type) {
        case ACTION_TYPE.CHANGE_VALUE:
            return {
                ...state, [action.payload.name]: action.payload.value
            }
        default:
            return state;
    }
}