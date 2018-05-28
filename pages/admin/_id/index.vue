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
// import axios from "axios";
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },
  layout: "admin",
  asyncData(context) {
    return context.app.$axios
      .$get(
        "posts/" +
          context.params.id +
          ".json"
      )
      .then(response => {
        return {
          loadedPost: response
        };
      })
      .catch(error => context.error(error));
  },
  methods: {
    onSubmitted(editedPost) {
      this.editedPost = editedPost;
      this.$axios
        .$put(
          "/posts/" +
            this.$route.params.id +
            ".json",
          editedPost
        )
        .then(response => {
          this.$store.dispatch('updatePost', {...this.editedPost, id: this.$route.params.id});
          alert("This post edited successfully");
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
