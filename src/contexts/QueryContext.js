import React, { createContext, useReducer } from "react";

export const INITIAL_STATE = {
    selectedQuery: '',
    sortFeedBack: null,
    sortQuery: null,
    sortQueryTime: null,
    orderByQuery: 'timeFrame',
    queryData: [
        { feedBack: 0, query: 'Topic Info', answer: "Answer of the query", timeFrame: '1:30pm-05:30pm', read: true },
        { feedBack: 0, query: 'Why Duck Fly? They should run', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 0, query: 'Why trees green', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: false },
        { feedBack: 0, query: 'Earth is a banana', answer: "Answer of the query", timeFrame: '5:30pm-05:30pm', read: true },
        { feedBack: 1, query: 'Green Banana', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: false },
        { feedBack: 1, query: 'Topic Info', answer: "Answer of the query", timeFrame: '3:30pm-05:30pm', read: true },
        { feedBack: 1, query: 'Why Duck Fly?', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 1, query: 'Why trees green', answer: "Answer of the query", timeFrame: '3:30pm-05:30pm', read: false },
        { feedBack: 1, query: 'Earth is a banana', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 0, query: 'Green Banana', answer: "Answer of the query", timeFrame: '4:30pm-05:30pm', read: false },
        { feedBack: 0, query: 'Topic Info', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 0, query: 'Why Duck Fly?', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 0, query: 'Why trees green', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: false },
        { feedBack: 0, query: 'Earth is a banana', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 2, query: 'Green Banana', answer: "Answer of the query", timeFrame: '2:30pm-05:30pm', read: false },
        { feedBack: 2, query: 'Topic Info', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 2, query: 'Why Duck Fly?', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 0, query: 'Why trees green', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: false },
        { feedBack: 0, query: 'Earth is a banana', answer: "Answer of the query", timeFrame: '12:30pm-05:30pm', read: true },
        { feedBack: 0, query: 'Green Banana', answer: "Answer of the query", timeFrame: '2:30pm-05:30pm', read: false },
    ]
}

export const ACTION_TYPE = {
    SELECT_QUERY: 'SELECT_QUERY',
    ADD_DATA: 'ADD_DATA',
    SORT_ORDER: 'SORT_ORDER'
}

export const QueryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.SELECT_QUERY:
            return {
                ...state, selectedQuery: action.payload.value
            }

        case ACTION_TYPE.ADD_DATA:
            return {
                ...state,
                [action.payload.name]: [...action.payload.value]
            }

        case ACTION_TYPE.SORT_ORDER:
            return {
                ...state,
                [action.payload.name]: !state[action.payload.name],
                orderByQuery: action.payload.orderBy
            }
        
        default:
            return state;
    }
}

export const QueryContext = createContext();

export const QueryProvider = (props) => {
    const [state, dispatch] = useReducer(QueryReducer, INITIAL_STATE);
    return (
        <QueryContext.Provider
            value={{
                queryState: state, 
                queryDispatch: dispatch, 
                queryActionType: ACTION_TYPE
            }}
        >
        {props.children}
        </QueryContext.Provider>
    );
}