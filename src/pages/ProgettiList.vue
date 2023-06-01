<script>
import ProjectCard from '../components/ProjectCard.vue';
import axios from 'axios';
import SingleProgetto from './SingleProgetto.vue';
export default {
    name: 'ProgettiList',
    data() {
        return {
            progetti: [],
            baseUrl: 'http://localhost:8000',
            currentPage: 1,
            lastPage: null,
            loading: true

        }
    },
    components: {
        ProjectCard,
        SingleProgetto
    },
    methods: {
        getProgetti(gotoPage) {
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
                    this.loading = false;

                });


        }

    },
    mounted() {
        this.getProgetti();
    }

}
</script>

<template>
    <div class="container">
        <div class="row">

            <div v-if="loading == false" class="col-4" v-for="progetto in progetti">
                <ProjectCard :progetto="progetto"></ProjectCard>
            </div>
            <div v-else>
                <img src="/loader.gif" alt="caricamento in corso..." />
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <button @click="getProgetti(currentPage - 1)"
                            :class="{ 'disabled': currentPage == 1, 'page-link': true }">
                            Previous
                        </button>
                    </li>

                    <li class="page-item" v-for="page in lastPage" :class="{ 'active': page == currentPage }">
                        <button @click="getProgetti(page)" :class="{ 'page-link': true }">
                            {{ page }}
                        </button>
                    </li>

                    <li class="page-item">
                        <button @click="getProgetti(currentPage + 1)"
                            :class="{ 'disabled': currentPage == lastPage, 'page-link': true }">
                            Next
                        </button>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>

<style></style>