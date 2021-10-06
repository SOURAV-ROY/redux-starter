import store from './store';

// state = reducer(state, action)
// Notify the subscribers that the state has changed

store.subscribe(() => {
    console.log('Store Changed!!', store.getState());
})

// const unsubscribe = store.subscribe(() => {
//     console.log('Store Changed!!', store.getState());
// })

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'BUG 1 Added'
    }
})

// unsubscribe();
store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1,
    }
})
console.log(store.getState());
