<template>
  <div>
      <v-layout>
          <v-flex xs10>
              <h2>Edit post with</h2>
              <AdminPostForm :post="loadedPost" @submit="onSubmitted"></AdminPostForm>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },
  layout: "admin",
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-d474b.firebaseio.com/posts/" +
          context.params.id +
          ".json"
      )
      .then(response => {
        return {
          loadedPost: response.data
        };
      })
      .catch(error => context.error(error));
  },
  methods: {
    onSubmitted(editedPost) {
      this.editedPost = editedPost;
      axios
        .put(
          "https://nuxt-blog-d474b.firebaseio.com/posts/" +
            this.$route.params.id +
            ".json",
          editedPost
        )
        .then(response => {
          alert("This post edited successfully");
          this.$store.dispatch('updatePost', {...this.editedPost, id: this.$route.params.id});
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
