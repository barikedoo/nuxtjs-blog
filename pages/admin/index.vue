<template>
  <div>
      <v-layout align-center class="mb-3" column>
          <h1>Welcome to admin area</h1>
        <v-flex x1>
            <v-btn @click="$router.push('/admin/new-post')">Create new post</v-btn>
            <v-btn color="error" @click="logout">Logout</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
          <v-flex xs2 v-for="post in loadedPosts" :key="post.id" class="ma-1">
              <PostPreview isAdmin :post="post"></PostPreview>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware : ['check-token','auth'],
  head: {
    title: "Admin area"
  },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/admin/auth')
    }
  }
};
</script>

<style>
</style>
