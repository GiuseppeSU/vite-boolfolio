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
            progetti: [],

        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row">

            <div class="col-4" v-for="progetto in progetti">
                <div class="card">
                    <img v-if="progetto.cover_image" :src="`${this.baseUrl}/storage/${progetto.cover_image}`"
                        class="card-img-top">
                    <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png"
                        class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">{{ progetto.title }}</h5>
                        <h5>{{ progetto.category?.name }}</h5>
                        <p class="card-text">{{ progetto.content }}</p>
                        <a href="#" class="btn btn-primary">Vedi post completo ... </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style></style>