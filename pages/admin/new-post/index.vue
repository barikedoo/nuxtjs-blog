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
      axios
        .post("https://nuxt-blog-d474b.firebaseio.com/posts.json", {
          ...newPost,
          added: new Date()
        })
        .then(result => {
          alert('New post added');
          this.$router.push('/admin');
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
</style>
