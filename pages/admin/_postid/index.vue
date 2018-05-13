<template>
  <div>
      <v-layout>
          <v-flex xs10>
              <AdminPostForm :post="loadedPost"></AdminPostForm>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";

export default {
  components: {
    AdminPostForm
  },
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        title: "Static title can kill you",
        thumbnailLink: "https://picsum.photos/300?random",
        body: "Static content kills"
      }
    };
  }
};
</script>

<style>

</style>
