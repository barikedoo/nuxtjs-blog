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
  middleware : 'auth',
  methods: {
    onSubmitted(newPost) {
      this.$store.dispatch('addNewPost', {...newPost, }).then(()=>{
        alert('New post was added');
        this.$router.push('/admin')
      })
    }
  }
};
</script>

<style>
</style>
