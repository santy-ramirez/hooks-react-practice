import React from 'react';
import { ADD_TASK, DELETE_TASK } from '../type'

export default (state, action) => {

    const { payload, type } = action;
    console.log(payload, type)
    switch (type) {
        case "ADD_TASK":
            return [...state, { id: Math.random() * 1200, text: payload }]
        case "DELETE_TASK":
            return state.filter(t => t.id != payload)
        default:
            return state;
    }

}

