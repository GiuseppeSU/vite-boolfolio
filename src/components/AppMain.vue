<script>
import ProjectCard from './ProjectCard.vue';
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            progetti: [],
            baseUrl: 'http://localhost:8000',
            currentPage: 1,
            lastPage: null

        }
    },
    components: {
        ProjectCard


    },
    methods: {
        getProgetto(gotoPage) {
            console.log('Ciao mondo!');

            axios.get(`${this.baseUrl}/api/progetti`,
                {
                    params: {
                        page: gotoPage
                    }
                }
            )
                .then(response => {
                    console.log(response);
                    this.progetti = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;

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
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button class="page-link" @click="getProgetto(currentPage - 1)"
                            :class="{ 'disabled': currentPage == 1 }">Previous</button></li>
                    <li class="page-item"><button class="page-link" @click="getProgetto(currentPage + 1)"
                            :class="{ 'disabled': currentPage == lastPage }">Next</button></li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style></style>