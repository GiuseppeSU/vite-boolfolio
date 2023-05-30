<script>


export default {
    name: 'ProjectCard',

    props: {
        cover_image: String,
        title: String,
        name: String,
        content: String


    },
    data() {
        return {
            baseUrl: 'http://localhost:8000',


        }
    },

}
</script>

<template>
    <div class="card">
        <img v-if="cover_image" :src="`${this.baseUrl}/storage/${cover_image}`" class="card-img-top">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <h5>{{ name }}</h5>
            <p class="card-text">{{ content }}</p>
            <a href="#" class="btn btn-primary">Vedi post completo ... </a>
        </div>
    </div>
</template>


<style></style>