<template>
  <div>
      <v-layout>
          <v-flex xs10>
            <AdminPostForm></AdminPostForm>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
    import AdminPostForm from '@/components/admin/AdminPostForm'
    export default {
        components: {
            AdminPostForm
        },
        layout: 'admin',
    }
</script>

<style>

</style>
