import { createStore } from 'vuex';
import { testPosts } from './testPosts';

// for simulate fetching data from server
const delay = () => new Promise(res => setTimeout(res, 1000))

const posts = {
    namespaced: true, // this is going to keep all of the state seperate

    // because the state is reactive, 
    //it's going to rerender the component and everything is going to updated
    state() {
        return {
            postId: null,
            all: []
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
            state.all = posts;
        }
    },

    // we don't want to do any asynchronous fetching in mutations
    // that's going to be done inside of actions.
    actions: {
        async fetch(ctx) {
            // ctx.state to access our state
            // ctx.dispatch to call another action
            // ctx.commit to commit a mutation
            await delay(); // simulating
            ctx.commit('setPosts', testPosts);
        }
    },

    // this is going to be a computed property for your store
    getters: {
     currentPost(state) {
        return state.all.find(x => {
          return x.id === state.postId;
        })
      }
    }
}

export const store = createStore({
    modules: {
        posts // store.state.posts, store.state.posts.posts
    }
})