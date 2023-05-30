<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            progetti: [],
            baseUrl: 'http://localhost:8000',

        }
    },
    components: {
        ProjectCard


    },
    methods: {
        getProgetto() {
            axios.get(`${this.baseUrl}/api/progetti`)
                .then(response => {
                    console.log(response);
                    this.progetti = response.data.results;

                });


        }

    },
    mounted() {
        this.getProgetto();
    }

}
</script>

<template>
    <div class="container">
        <div class="row">

            <div class="col-4" v-for="progetto in progetti">
                <ProjectCard :cover_image="progetto.cover_image" :title="progetto.title" :name="progetto.name"
                    :content="progetto.content"></ProjectCard>




            </div>

        </div>
    </div>
</template>

<style></style>