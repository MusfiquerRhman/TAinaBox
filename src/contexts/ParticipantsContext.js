import React, { createContext, useReducer } from "react";

export const INITIAL_STATE = {
    selectedParticipant: '',
    sortParticipant: null,
    sortParticipantTime: null,
    orderByParticipant: 'timeFrame',
    participantData: [
        {name: 'John Jacob', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '1:30pm-05:30pm'},
        {name: 'John Jacobly', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacobgreen', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacob banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '5:30pm-05:30pm'},
        {name: 'John Jacobna', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm'},
        {name: 'Joan Jacob', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '3:30pm-05:30pm'},
        {name: 'Joan Jacobly', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm'},
        {name: 'Joan Jacobgreen', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '3:30pm-05:30pm'},
        {name: 'Joan Jacob banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm'},
        {name: 'Joan Jacobna', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '4:30pm-05:30pm'},
        {name: 'Joan Jacob', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacobly', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacobgreen', details: {inquired: 100, positive: 0, negative: 100}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacob banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacobna', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '2:30pm-05:30pm'},
        {name: 'John Jacob', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacobly', details: {inquired: 100, positive: 100, negative: 0}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacobgreen', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacob banana', details: {inquired: 100, positive: 40, negative: 60}, timeFrame: '12:30pm-05:30pm'},
        {name: 'John Jacobna', details: {inquired: 100, positive: 90, negative: 10}, timeFrame: '2:30pm-05:30pm'},
    ]
}

export const ACTION_TYPE = {
    SELECT_PARTICIPANT: 'SELECT_PARTICIPANT',
    ADD_DATA: 'ADD_DATA',
    SORT_ORDER: 'SORT_ORDER'
}

export const ParticipantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.SELECT_PARTICIPANT:
            return {
                ...state, selectedParticipant: action.payload.value
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
                orderByParticipant: action.payload.orderBy
            }
        
        default:
            return state;
    }
}

export const ParticipantContext = createContext();

export const ParticipantProvider = (props) => {
    const [state, dispatch] = useReducer(ParticipantReducer, INITIAL_STATE);
    return (
        <ParticipantContext.Provider
            value={{
                participantState: state, 
                participantDispatch: dispatch, 
                participantActionType : ACTION_TYPE
            }}
        >
            {props.children}
        </ParticipantContext.Provider>
    );
}