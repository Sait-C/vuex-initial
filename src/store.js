import { createStore } from 'vuex';

export const store = createStore({
    state() { // it is like data() {return{}}
        return {
            count: 0 // it is going to be reactive
        }
    },

    // This is where all your methods go that are going to update the state.
    mutations: {
        increment(state, payload) {
            //state.count += 1;
            state.count += payload;
        }
    }
})