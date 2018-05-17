<template>
  <div class="all-posts">
    <h2 class="text-xs-center mb-3">Here are all the posts</h2>
    <v-layout row wrap>
      <v-flex xs3 v-for="post in loadedPosts" :key="post.id" class="ma-1">
        <PostPreview :post="post"></PostPreview>
      </v-flex>
  </v-layout>
  </div>
</template>

<script>
import PostPreview from "@/components/posts/PostPreview";
export default {
  components: {
    PostPreview
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style>

</style>
