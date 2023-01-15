import React, { createContext, useReducer } from "react";

export const INITIAL_STATE = {
    selectedTopic: '',
    sortTopic: null,
    sortTopicTime: null,
    orderByTopic: 'timeFrame',
    topicData: [
        {name: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '1:30pm-05:30pm', read: true},
        {name: 'Why Duck Fly? They should run', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Why trees green', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: false},
        {name: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '5:30pm-05:30pm', read: true},
        {name: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: false},
        {name: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '3:30pm-05:30pm', read: true},
        {name: 'Why Duck Fly?', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Why trees green', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '3:30pm-05:30pm', read: false},
        {name: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '4:30pm-05:30pm', read: false},
        {name: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Why Duck Fly?', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Why trees green', details: {inquired: 100, positive: 0, negative: 100}, timeFrame: '12:30pm-05:30pm', read: false},
        {name: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '2:30pm-05:30pm', read: false},
        {name: 'Topic Info', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Why Duck Fly?', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Why trees green', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm', read: false},
        {name: 'Earth is a banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm', read: true},
        {name: 'Green Banana', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '2:30pm-05:30pm', read: false},
    ],
}

export const ACTION_TYPE = {
    SELECT_TOPIC: 'SELECT_TOPIC',
    ADD_DATA: 'ADD_DATA',
    SORT_ORDER: 'SORT_ORDER'
}

export const TopicReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.SELECT_TOPIC:
            return {
                ...state, selectedTopic: action.payload.value
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
                [action.payload.orderBy]: action.payload.order
            }
        
        default:
            return state;
    }
}

export const TopicContext = createContext();

export const TopicProvider = (props) => {
    const [state, dispatch] = useReducer(TopicReducer, INITIAL_STATE);
    return (
        <TopicContext.Provider
            value={{
                topicState: state, dispatch, ACTION_TYPE
            }}
        >
        {props.children}
        </TopicContext.Provider>
    );
}