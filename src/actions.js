import * as actions from './actionTypes';

// export function bugAdded(description) {
//     return {
//         // type: 'bugAdded',
//         type: actions.BUG_ADDED,
//         payload: {
//             description: 'BUG 1 Added'
//         }
//     };
// }

export const bugAdded = (description) => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
})

export function bugResolved(id) {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id
        }
    };
}

export function bugRemoved(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id
        }
    };
}
