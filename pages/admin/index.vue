<template>
  <div>
      <v-layout align-center class="mb-3" column>
          <h1>Welcome to admin area</h1>
        <v-flex xs1>
            <v-btn @click="$router.push('/admin/new-post')">Create new post</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap>
          <v-flex xs2>
              <PostPreview isAdmin></PostPreview>
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
    layout: 'admin',
}
</script>

<style>

</style>
