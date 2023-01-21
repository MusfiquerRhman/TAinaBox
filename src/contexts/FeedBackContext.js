import React, { createContext, useReducer } from "react";

export const INITIAL_STATE = {
    name: '',
    inFeedBack: '',
    course: [],
    class: [],
    resultingFeedback: '',
    sortName: null,
    sortTimeframe: null,
    order: null,
    sortBy: '',
    feedBack: [
        {name: 'Musfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Ausfiauer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Busfiauer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Gusfiauer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Tusfiauer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Yusfiauer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Qusfiauer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Musfiauer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Ausfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Busfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-03', result: 1},
        {name: 'Gusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-03', result: 1},
        {name: 'Tusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-03', result: 1},
        {name: 'Yusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-03', result: 1},
        {name: 'Qusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-03', result: 1},
        {name: 'Musfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-05', result: 1},
        {name: 'Ausfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-05', result: 1},
        {name: 'Busfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-05', result: 1},
        {name: 'Gusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-05', result: 1},
        {name: 'Tusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-05', result: 1},
        {name: 'Yusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-05', result: 1},
        {name: 'Qushiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Mushiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Aushiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-02', result: 1},
        {name: 'Bushiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-02', result: 1},
        {name: 'Gushiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-02', result: 1},
        {name: 'Tushiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-02', result: 1},
        {name: 'Yushiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-02', result: 1},
        {name: 'Qusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-02', result: 1},
        {name: 'Musfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Ausfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Busfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Gusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Tusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Yusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
        {name: 'Qusfiquer', went: 'I really Liked', improve: 'I dont like', timeStamp: '2023-01-01', result: 1},
    ]
}

export const ACTION_TYPE = {
    ADD_DATA: 'ADD_DATA',
    ADD_CHIPS: "ADD_CHIPS",
    DELETE_CHIPS: "DELETE_CHIPS",
    SORT_ORDER: 'SORT_ORDER'
}

export const FeedbackReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.ADD_DATA: 
            return{
                ...state, [action.payload.name]: action.payload.value
            }

        case ACTION_TYPE.ADD_CHIPS:
            let newChips = new Set([...state[action.payload.name], action.payload.value]);
            return {
                ...state, [action.payload.name]: [...newChips]
            }

        case ACTION_TYPE.DELETE_CHIPS:
            return {
                ...state,
                [action.payload.name]: state[action.payload.name].filter(
                    name => name !== action.payload.value
                )
            }

        case ACTION_TYPE.SORT_ORDER:
            return {
                ...state,
                order: !state.order,
                sortBy: action.payload.orderBy,
                [action.payload.iconOf]: !state[action.payload.iconOf]
            }
            

        default:
            return state;
    }
}

export const FeedBackContext = createContext();

export const FeedBackProvider = (props) => {
    const [state, dispatch] = useReducer(FeedbackReducer, INITIAL_STATE);
    return (
        <FeedBackContext.Provider 
            value={{
                feedBackState: state,
                feedBackDispatch: dispatch,
                actionType: ACTION_TYPE
            }}
        >
            {props.children}
        </FeedBackContext.Provider>
    )
}