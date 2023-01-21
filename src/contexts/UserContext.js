import React, { createContext, useReducer } from "react";

export const INITIAL_STATE = {
    name: '',
    email: '',
    number: '',
    course: ['JNU 123'],
    class: [],
    status: 0,
    sortBy: '',
    order: null,
    sortName: null,
    sortType: null,
    sortEmail: null,
    sortPhone: null,
    sortStatus: null,
    isLoggedIn: false,
    users: [
        {name: 'Musfiquer', type: 'Admin', email: 'Musfiquer@gmail.com', phone: '1231122'},
        {name: 'Jean', type: 'Student', email: 'Jean@gmail.com', phone: '2231122'},
        {name: 'Shasa', type: 'Student', email: 'Shasa@gmail.com', phone: '3231122'},
        {name: 'Eren', type: 'Admin', email: 'Eren@gmail.com', phone: '4231122'},
        {name: 'Mikasa', type: 'Teacher', email: 'Mikasa@gmail.com', phone: '5231122'},
        {name: 'Levi', type: 'Admin', email: 'Levi@gmail.com', phone: '6031122'},
        {name: 'Musfiquer', type: 'Admin', email: 'Musfiquer@gmail.com', phone: '1231122'},
        {name: 'Jean', type: 'Student', email: 'Jean@gmail.com', phone: '2231122'},
        {name: 'Shasa', type: 'Student', email: 'Shasa@gmail.com', phone: '3231122'},
        {name: 'Eren', type: 'Admin', email: 'Eren@gmail.com', phone: '4231122'},
        {name: 'Mikasa', type: 'Teacher', email: 'Mikasa@gmail.com', phone: '5231122'},
        {name: 'Levi', type: 'Admin', email: 'Levi@gmail.com', phone: '6031122'},
        {name: 'Musfiquer', type: 'Admin', email: 'Musfiquer@gmail.com', phone: '1231122'},
        {name: 'Jean', type: 'Student', email: 'Jean@gmail.com', phone: '2231122'},
        {name: 'Shasa', type: 'Student', email: 'Shasa@gmail.com', phone: '3231122'},
        {name: 'Eren', type: 'Admin', email: 'Eren@gmail.com', phone: '4231122'},
        {name: 'Mikasa', type: 'Teacher', email: 'Mikasa@gmail.com', phone: '5231122'},
        {name: 'Levi', type: 'Admin', email: 'Levi@gmail.com', phone: '6031122'},
        {name: 'Musfiquer', type: 'Admin', email: 'Musfiquer@gmail.com', phone: '1231122'},
        {name: 'Jean', type: 'Student', email: 'Jean@gmail.com', phone: '2231122'},
        {name: 'Shasa', type: 'Student', email: 'Shasa@gmail.com', phone: '3231122'},
        {name: 'Eren', type: 'Admin', email: 'Eren@gmail.com', phone: '4231122'},
        {name: 'Mikasa', type: 'Teacher', email: 'Mikasa@gmail.com', phone: '5231122'},
        {name: 'Levi', type: 'Admin', email: 'Levi@gmail.com', phone: '6031122'},
    ] //{name: '', type: '', email: '', phone: '', status: ''}
}


export const ACTION_TYPE = {
    ADD_DATA: 'ADD_DATA',
    ADD_CHIPS: "ADD_CHIPS",
    DELETE_CHIPS: "DELETE_CHIPS",
    SORT_ORDER: 'SORT_ORDER'
}

export const UserReducer = (state = INITIAL_STATE, action) => {
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

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);
    return (
        <UserContext.Provider 
            value={{
                userState: state,
                userDispatch: dispatch,
                actionType: ACTION_TYPE
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}