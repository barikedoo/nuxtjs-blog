<template>
  <div>
        <v-form @submit.prevent="savePost" ref="newPostForm" lazy-validation>

            <v-text-field required :rules="rules" v-model="newPost.title" color="blue" label="Post title"></v-text-field>

            <v-text-field v-model="newPost.thumbnailLink" color="blue" label="Thumbnail link"></v-text-field>
            <v-text-field v-model="newPost.previewText" color="blue" label="Preview text"></v-text-field>

            <v-text-field required :rules="rules" color="blue" v-model="newPost.body" textarea label="Content"></v-text-field>

            <v-btn color="success" type="submit">Save</v-btn>
            <v-btn color="error" @click="$router.push('/admin')">Cancel</v-btn>

        </v-form>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      newPost: this.post
        ? { ...this.post }
        : {
            title: "",
            thumbnailLink: "",
            previewText: "",
            body: ""
          },
      rules: [v => !!v || "This field cannot be empty"]
    };
  },
  methods: {
    savePost() {
      this.$emit("submit", this.newPost);
    }
  }
};
</script>

<style>
</style>
