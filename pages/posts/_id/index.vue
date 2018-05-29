<template>
    <section>
        <v-card>
            <h3 class="display-1 ma-3 text-xs-center">{{loadedPost.title}}</h3>
            <v-card-media :src="loadedPost.thumbnailLink" height="150px"></v-card-media>
            <p class="text-xs-center">{{loadedPost.body}}</p>
            <p class="text-xs-right pa-3">Added {{loadedPost.added}} by <span class="post-author">Pete</span></p>    
        </v-card>
    </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$axios
      .$get("/posts/" + context.params.id + ".json")
      .then(response => {
        console.log(response);
        return {
          loadedPost: response
        };
      })
      .catch(error => context.error(error));
  }
};
</script>

<style scoped>
.post-author:hover {
  cursor: pointer;
  color: blue;
}
</style>
