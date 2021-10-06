import store from './store';
// import * as actions from './actionTypes';
import {bugAdded, bugResolved, bugRemoved} from "./actions";

// state = reducer(state, action)
// Notify the subscribers that the state has changed

store.subscribe(() => {
    console.log('Store Changed!!', store.getState());
})

// const unsubscribe = store.subscribe(() => {
//     console.log('Store Changed!!', store.getState());
// })

// store.dispatch({
//     // type: 'bugAdded',
//     type: actions.BUG_ADDED,
//     payload: {
//         description: 'BUG 1 Added'
//     }
// })

store.dispatch(bugAdded('BUG 1 Added 👽'));

// unsubscribe();
// store.dispatch({
//     // type: 'bugRemoved',
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1,
//     }
// })

store.dispatch(bugResolved(1));
// store.dispatch(bugRemoved(1));


console.log(store.getState());
