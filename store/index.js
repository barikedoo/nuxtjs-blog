import Vuex from "vuex";
import Cookies from 'js-cookie'

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
        let postIndex = state.loadedPosts.findIndex(item => item.id == post.id);
        state.loadedPosts[postIndex] = post;
      },
      _setToken(state, token) {
        state.token = token;
      },
      _clearToken(state) {
        state.token = null;
      }
    },


    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get("/posts.json")
          .then(response => {
            let postsArray = [];
            for (let key in response) {
              postsArray.push({
                ...response[key],
                id: key
              });
            }
            vuexContext.commit("_setPosts", postsArray);
          })
          .catch(error => context.error(error));
      },

      setPosts(context, posts) {
        context.commit("_setPosts", posts);
      },

      addNewPost(context, post) {
        return this.$axios
          .$post("/posts.json?auth=" + context.state.token, {
            ...post,
            added: new Date()
          })
          .then(response => {
            console.log(response);
            context.commit("_addNewPost", {
              ...post,
              id: response.name
            });
          });
      },

      updatePost(context, postData) {
        return this.$axios
          .$put("/posts/" + postData.id + ".json?auth=" + context.state.token, {
            ...postData
          })
          .then(response => {
            console.log(response);
            context.commit("_updatePost", postData);
          });
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
            Cookies.set("token", response.idToken);
            Cookies.set("tokenExpirationDate",
              new Date().getTime() + +response.expiresIn * 1000);

            context.commit("_setToken", response.idToken);

            localStorage.setItem("token", response.idToken);
            localStorage.setItem(
              "tokenExpirationDate",
              new Date().getTime() + +response.expiresIn * 1000
            );


          })
          .catch(error => console.log(error));
      },

      initAuth(context, request) {
        let token, tokenExpirationDate;

        if (request) {
          console.log('there are cookies');

          if (!request.headers.cookie) {
            console.log('no cookies')
            return;
          }

          token = request.headers.cookie.split(';').find(item => item.trim().startsWith('token=')).split('=')[1];
          tokenExpirationDate = request.headers.cookie.split(';').find(item => item.trim().startsWith('tokenExpirationDate=')).split('=')[1];

          if (!token) {
            return;
          }

        } else {
          token = localStorage.getItem("token");
          tokenExpirationDate = localStorage.getItem("tokenExpirationDate");
        };


        if (new Date().getTime() > +tokenExpirationDate || !token) {
          context.dispatch('logout');
          return;
        }
        context.commit("_setToken", token);
      },
      logout(context) {
        context.commit('_clearToken');
        Cookies.remove('token');
        Cookies.remove('tokenExpirationDate');

        if (process.client) {
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpirationDate');
        }
      }
    }
  });
};

export default createStore; 