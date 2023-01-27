import { createStore } from 'vuex';

export const store = createStore({
    // because the state is reactive, 
    //it's going to rerender the component and everything is going to updated
    state() {
        return {
            postId: null
        }
    },

    // This is where all your methods go that are going to update the state.
    mutations: {
        setPostId(state, postId) {
            state.postId = postId;
        }
    }
})