import { createStore } from 'vuex';

export const store = createStore({
    state() { // it is like data() {return{}}
        return {
            count: 0
        }
    }
})