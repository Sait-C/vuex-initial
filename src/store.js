import { createStore } from 'vuex';
import { testPosts } from './testPosts';

// for simulate fetching data from server
const delay = () => new Promise(res => setTimeout(res, 1000))

export const store = createStore({
    // because the state is reactive, 
    //it's going to rerender the component and everything is going to updated
    state() {
        return {
            postId: null,
            posts: []
        }
    },

    // This is where all your methods go that are going to update the state.
    mutations: {
        // mutations should be as simple as possible,
        // no asynchronous behavior, just plain old mutations updating the state
        setPostId(state, postId) {
            state.postId = postId;
        },

        setPosts(state, posts) {
            state.posts = posts;
        }
    },

    // we don't want to do any asynchronous fetching in mutations
    // that's going to be done inside of actions.
    actions: {
        async fetchPosts(ctx) {
            // ctx.state to access our state
            // ctx.dispatch to call another action
            // ctx.commit to commit a mutation
            await delay(); // simulating
            ctx.commit('setPosts', testPosts);
        }
    }
})