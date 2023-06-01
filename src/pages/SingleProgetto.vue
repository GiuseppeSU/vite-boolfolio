<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'SingleProgetto',
    data() {
        return {
            store,
            progetto: null
        }
    },
    mounted() {
        const slug = this.$route.params.progetto;

        axios.get(`${this.store.baseUrl}/api/progetti/${slug}`)
            .then(response => {
                if (response.data.success == true) {
                    this.progetto = response.data.progetto;
                } else {
                    //alert(response.data.error);

                    this.$router.push({ name: 'not-found' });
                }

            });

    }
}
</script>

<template>
    <div v-if="progetto">
        <img v-if="progetto.cover_image" :src="`${this.store.baseUrl}/storage/${progetto.cover_image}`" class="img-fluid" />
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="img-fluid" />
        <h1>{{ progetto.title }}</h1>
        <h5>{{ progetto.category?.name }}</h5>
        <span v-for="tag in progetto.types" class="badge rounded-pill text-bg-primary">{{ type.name }}</span>
        <p>{{ progetto.content }}</p>





    </div>
    <div v-else>
        <img src="/loader.gif" alt="Caricamento in corso" />
    </div>
</template>
