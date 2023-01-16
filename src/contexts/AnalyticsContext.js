import { createContext, useReducer } from "react";

let date = new Date();
let yesterday = new Date(date.setDate(date.getDate() - 1)).toISOString().split("T")[0];
let today = date.toISOString().split("T")[0];

const INITIAL_STATE = {
    selectMethod: 1,
    startDate: yesterday,
    endDate: today,
    questionsDataset: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        data:[350, 156, 137, 216, 123, 975, 654, 235, 845, 632, 265, 156],   
    },
    satisfaction: {
        datasets_1: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
            data: [654, 235, 845, 632, 265, 156, 350, 156, 137, 216, 123, 975]
        },
        dataset_2: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
            data: [632, 265, 156, 654, 137, 216, 123, 235, 845, 350, 156, 975]
        }
    }
}

export const ACTION_TYPE = {
    ADD_QUESTIONS_DATA: 'ADD_QUESTIONS_DATA',
    ADD_SATISFACTION_DATA: 'ADD_SATISFACTION_DATA'
}

export const AnalyticsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.ADD_QUESTIONS_DATA:
            return {
                ...state, selectedParticipant: action.payload.value
            }

        case ACTION_TYPE.ADD_SATISFACTION_DATA:
            return {
                ...state,
                [action.payload.name]: [...action.payload.value]
            }

        default:
            return state;
    }
}

export const AnalyticsContext = createContext();

export const AnalyticsProvider = (props) => {
    const [state, dispatch] = useReducer(AnalyticsReducer, INITIAL_STATE);
    return (
        <AnalyticsContext.Provider 
            value={{
                analyticsState: state,
                analyticsDispatch: dispatch,
                analyticsActionType: ACTION_TYPE
            }}
        >
            {props.children}
        </AnalyticsContext.Provider>
    )
}