<script>
import { store } from '../store.js';

export default {
    name: 'ProjectCard',
    props: ['progetto'],
    data() {
        return {
            contentMaxLength: 200,
            store
        }
    },
    methods: {
        truncateText(text) {
            if (text && text.length > this.contentMaxLength) {
                return text.substr(0, this.contentMaxLength) + '...';
            }
            return text;
        }
    }
};
</script>

<template>
    <div class="card">
        <img v-if="progetto.cover_image" :src="`${this.store.baseUrl}/storage/${progetto.cover_image}`"
            class="card-img-top">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{ progetto.title }}</h5>
            <h5>{{ progetto.category?.name }}</h5>
            <span v-for="tag in progetto.tags" class="badge rounded-pill text-bg-primary">{{ tag.name }}</span>
            <p class="card-text">{{ truncateText(progetto.content) }}</p>
            <router-link :to="{ name: 'single-progetto', params: { progetto: progetto.slug } }" class="btn btn-primary">
                Vedi post completo
            </router-link>
        </div>
    </div>
</template>


<style></style>