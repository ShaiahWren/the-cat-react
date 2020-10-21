import { ACTION_EAT, ACTION_NAP, ACTION_PLAY, ACTION_SET_NAME } from './actionTypes';




export const nap = () => {
    return {
        type: ACTION_NAP
}
}

export const eat = () => {
    return {
        type: ACTION_EAT
}
}

export const play = () => {
    return {
        type: ACTION_PLAY
    }
}

export const setName = (name) => {
    return {
        type: ACTION_SET_NAME,
        payload: { name }
    }
}
