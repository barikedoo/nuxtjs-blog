<template>
  <div>
        <v-form @submit.prevent="savePost" ref="newPostForm" lazy-validation>

            <v-text-field required :rules="rules" v-model="newPost.title" label="Post title"></v-text-field>

            <v-text-field v-model="newPost.thumbnailLink" label="Thumbnail link"></v-text-field>

            <v-text-field required :rules="rules" v-model="newPost.body" textarea label="Content"></v-text-field>

            <v-btn color="success" type="submit">Save</v-btn>
            <v-btn color="error" @click="$router.push('/admin')">Cancel</v-btn>

        </v-form>
  </div>
</template>

<script>
export default {
    props: {
        post: {
            type:Object,
            required: false
        }
    },
  data() {
    return {
      newPost: this.post ? {...this.post} : {
        title: "",
        thumbnailLink: "",
        body: ""
      },
      rules: [
        v => !!v || "This field cannot be empty",
      ]
    };
  },
  methods: {
    savePost() {
      if (this.$refs.newPostForm.validate()) {
          console.log(this.newPost);
      }
    }
  }
};
</script>

<style>

</style>
