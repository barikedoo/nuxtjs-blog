import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    },
    mutations: {
      _setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      _addNewPost(state, post) {
        state.loadedPosts.push(post);
      },
      _updatePost(state, post) {
        let postIndex = state.loadedPosts.findIndex((item) => item.id == post.id );
        state.loadedPosts[postIndex] = post;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios.get('https://nuxt-blog-d474b.firebaseio.com/posts.json')
          .then(response => {
            let postsArray = [];
            for (let key in response.data) {
              postsArray.push({...response.data[key], id : key})
            }
            vuexContext.commit('_setPosts', postsArray )
          })
          .catch(error => context.error(error));
      },

      setPosts(context, posts) {
        context.commit('_setPosts', posts);
      },
      addNewPost(context, post) {
        context.commit('_addNewPost',post);
      },
      updatePost(context, post) {
        context.commit('_updatePost', post)
      }
    }
  })
}

export default createStore
