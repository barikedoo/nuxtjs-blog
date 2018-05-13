<template>
<div>
  <v-layout column justify-center align-center> 
    <v-flex xs12 sm8 md6 class="mb-3">
      <h2>Main page</h2>
      <h2>Welcome to one fine blog!</h2>
      <h3>You can read the latest articles about everything. Literally.</h3>
    </v-flex>
  </v-layout>

  <v-layout row wrap>
    <v-flex xs3>
      <PostPreview></PostPreview>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import PostPreview from '@/components/posts/PostPreview'
export default {
  components: {
    PostPreview
  },
};
</script>

<style>
</style>



