import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
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
        let postIndex = state.loadedPosts.findIndex((item) => item.id == post.id);
        state.loadedPosts[postIndex] = post;
      },
      _setToken(state, token) {
        state.token = token;
      },
      _clearToken(state) {
        state.token = null
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios.$get('/posts.json')
          .then(response => {
            let postsArray = [];
            for (let key in response) {
              postsArray.push({ ...response[key],
                id: key
              })
            }
            vuexContext.commit('_setPosts', postsArray)
          })
          .catch(error => context.error(error));
      },

      setPosts(context, posts) {
        context.commit('_setPosts', posts);
      },

      addNewPost(context, post) {
        return this.$axios
          .$post("/posts.json?auth=" + context.state.token, {
            ...post,
            added: new Date()
          })
          .then(response => {
            console.log(response);
            context.commit('_addNewPost', { ...post,
              id: response.name
            });
          })
      },

      updatePost(context, postData) {
        return this.$axios
          .$put(
            "/posts/" +
            postData.id +
            ".json?auth=" + context.state.token, {
              ...postData
            }
          ).then(response => {
            console.log(response);
            context.commit('_updatePost', postData)
          })

      },

      authenticate(context, authData) {
        let authURL =
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=";

        if (!authData.isLogin) {
          authURL =
            "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=";
        }
        return this.$axios
          .$post(authURL + process.env.fbAPIKey, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then(response => {
            console.log(response)
            context.commit('_setToken', response.idToken);
            context.dispatch('setLogoutTimer', response.expiresIn * 1000);
          })
          .catch(error => console.log(error));
      },
      setLogoutTimer(context, duration) {
        setTimeout(() => {
          context.commit('_clearToken')
        }, duration);
      }
    }
  })
}

export default createStore
