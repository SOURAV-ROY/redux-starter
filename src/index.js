import store from './store';

store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'BUG 1 Added'
    }
})
console.log(store.getState());
