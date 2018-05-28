<template>
  <div>
      <v-layout>
          <v-flex xs10>
            <AdminPostForm @submit="onSubmitted"></AdminPostForm>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
import axios from "axios";

export default {
  components: {
    AdminPostForm
  },
  layout: "admin",
  methods: {
    onSubmitted(newPost) {
      this.newPost = newPost;
      this.$axios
        .$post("/posts.json", {
          ...newPost,
          added: new Date()
        })
        .then(response => {
          this.$store.dispatch("addNewPost", {
            ...this.newPost,
            id: response.name
          });
          console.log(response);
          alert("New post added");
          this.$router.push("/admin");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
