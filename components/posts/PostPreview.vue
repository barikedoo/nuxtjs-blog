<template>
    <nuxt-link :to="postLink">
        <v-card>
            <v-card-media src="https://picsum.photos/200/200/?random" height="200"></v-card-media>
            <h3 class="pa-2 text-xs-center">Post Title</h3>
            <p class="text-xs-right pt-3 pr-2">Added: 22.03.2018</p>
        </v-card>
    </nuxt-link>
</template>

<script>
export default {
    name: 'PostPreview',
    props: {
        isAdmin: {
            type:Boolean,
            default: false,
            // required: true
        }
    },
    computed: {
        postLink() {
            return this.isAdmin ? `/admin/ ${this.id}` : `/posts/ ${this.id}`
        }
    }
};
</script>

<style>

</style>
