import React, { createContext, useReducer } from "react";

export const INITIAL_STATE = {
    name: 'Musfiquer Rhman',
    type: 'Teacher',
    role: 'Co-teacher',
    officeHours: ['9:00AM - 12PM', '2:00PM - 5:00PM'],
    location: 'Building: 4, 3rd Floor, Room: 12',
    course: 'Computer Science',
    sections: [1,2,3],
    class: [] //  {days: [], schedule: '', name: ''}
}

export const ACTION_TYPE = {
    ADD_PROFILE_DETAILS: 'ADD_PROFILE_DETAILS',
    ADD_SCHEDULE: 'ADD_SCHEDULE',
    EDIT_PROFILE_DETAILS: 'EDIT_PROFILE_DETAILS',
    EDIT_SCHEDULE: 'EDIT_SCHEDULE'
}


export const ProfileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_TYPE.ADD_PROFILE_DETAILS:
            return {
                ...state,
                name: action.payload.name,
                type: action.payload.type,
                role: action.payload.role,
                officeHours: action.payload.officeHours,
                location: action.payload.location,
                course: action.payload.course,
                sections: action.payload.sections
            }

        case ACTION_TYPE.ADD_SCHEDULE:
            return {
                ...state,
                class: state.class.push({
                    id: action.payload.id,
                    days: action.payload.days,
                    schedule: action.payload.schedule,
                    name: action.payload.name
                })
            }
        
        case ACTION_TYPE.EDIT_PROFILE_DETAILS:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        
        case ACTION_TYPE.EDIT_SCHEDULE:
            return {
                ...state,
                class: state.class.map(item => (
                    item.id === action.payload.id 
                        ? {...item, ...action.payload} 
                        : item
                ))
            }

        default:
            return state;
    }

}

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
    const [state, dispatch] = useReducer(ProfileReducer, INITIAL_STATE);
    return (
        <ProfileContext.Provider
            value={{
                profileState: state, 
                profileDispatch: dispatch, 
                profileActionType: ACTION_TYPE
            }}
        >
        {props.children}
        </ProfileContext.Provider>
    );
}