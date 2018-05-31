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
  middleware : ['check-token','auth'],
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
      this.$store.dispatch('updatePost', {...editedPost, id:this.$route.params.id}).then(() =>{
        this.$router.push('/admin')
      })
    }
  }
};
</script>

<style>
</style>
