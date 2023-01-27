import { createStore } from 'vuex';

// for simulate fetching data from server
const delay = () => new Promise(res => setTimeout(res, 1000))

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
        // mutations should be as simple as possible,
        // no asynchronous behavior, just plain old mutations updating the state
        setPostId(state, postId) {
            state.postId = postId;
        }
    },

    // we don't want to do any asynchronous fetching in mutations
    // that's going to be done inside of actions.
    actions: {
        async fetchPosts(ctx, payload) {
            await delay(); // simulating
            console.log(payload);
        }
    }
})