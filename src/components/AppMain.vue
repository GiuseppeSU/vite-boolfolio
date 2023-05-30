<script>
import axios from 'axios';
export default {
    name: 'AppMain',
    data() {
        return {
            progetti: [],
            baseUrl: 'http://localhost:8000',

        }
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

<template></template>

<style></style>