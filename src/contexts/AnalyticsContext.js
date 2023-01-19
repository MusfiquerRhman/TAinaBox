import { createContext, useReducer } from "react";

let date = new Date();
let today = date.toISOString().split("T")[0];
let yesterday = new Date(date.setDate(date.getDate() - 1)).toISOString().split("T")[0];

export const ACTION_TYPE = {
    ADD_QUESTIONS_DATA: 'ADD_QUESTIONS_DATA',
    ADD_SATISFACTION_DATA: 'ADD_SATISFACTION_DATA',
    ADD_DEMOGRAPHIC_DATA: 'ADD_DEMOGRAPHIC_DATA',
    CHANGE_VALUE: 'CHANGE_VALUE',
}

const INITIAL_STATE = {
    today: today,
    selectMethod: 0,
    startDate: yesterday,
    endDate: today,
    questionsDataset: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        data:[350, 156, 137, 216, 123, 975, 654, 235, 845, 632, 265, 156],   
    },
    satisfaction: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        dataset_1: [654, 235, 845, 632, 265, 156, 350, 156, 137, 216, 123, 975],
        dataset_2: [632, 265, 156, 654, 137, 216, 123, 235, 845, 350, 156, 975],
    },
    demographicData: {
        labels: ['Age 10-17' ,'Age 18-25', 'Age 26-40', "Age 41-65", "Age 65+"],
        data: [35, 63, 21, 47, 12]
    }
}

export const AnalyticsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case ACTION_TYPE.CHANGE_VALUE:
            return {
                ...state, [action.payload.name]: action.payload.value
            }

        case ACTION_TYPE.ADD_QUESTIONS_DATA:
            return {
                ...state,
                questionsDataset: {
                    labels: action.payload.label, 
                    data: action.payload.data
                }
            }

        case ACTION_TYPE.ADD_SATISFACTION_DATA:
            return {
                ...state,
                satisfaction: {
                    labels: action.payload.labels,
                    dataset_1: action.payload.dataset_1.data,
                    dataset_2: action.payload.dataset_2.data
                }
            }

        case ACTION_TYPE.ADD_DEMOGRAPHIC_DATA: 
            return {
                ...state,
                demographicData: {
                    label: action.payload.labels,
                    data: action.payload.data
                }
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