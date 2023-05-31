<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProgetto',
    data() {
        return {
            store,

        }
    },
    mounted() {
        const slug = this.$route.params.slug;



        axios.get(`${this.store.baseUrl}/api/progetto/${slug}`)
            .then(response => {
                console.log(response);
            });

    }
}

</script>

<template>
    <h1>qui ci sono i post singoli</h1>
</template >
