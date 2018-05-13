<template>
  <div class="all-posts">
    <h2 class="text-xs-center mb-3">Here are all the posts</h2>
    <v-layout row wrap>
      <v-flex xs3>
        <PostPreview></PostPreview>
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
};
</script>

<style>

</style>
