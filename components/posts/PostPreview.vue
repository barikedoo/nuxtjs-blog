<template>
    <nuxt-link :to="postLink">
        <v-card>
            <v-card-media :src="post.thumbnailLink" height="200"></v-card-media>
            <h3 class="pa-2 text-xs-center">{{post.title}}</h3>
            <p class="pl-3">{{post.previewText}}</p>
            <p class="text-xs-right pt-3 pr-2 mb-0">Added: {{post.added | date }}</p>
        </v-card>
    </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    isAdmin: {
      type: Boolean,
      default: false
      // required: true
    },
    post: {
      type: Object
      // required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? "/admin/" + this.post.id : "/posts/" + this.post.id;
    }
  }
};
</script>

<style>
</style>
