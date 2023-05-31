<script >
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
    AppMain

  }
}

</script>

<template>
  <header>
    <AppHeader></AppHeader>
    <route-view></route-view>
  </header>


  <main>

  </main>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
