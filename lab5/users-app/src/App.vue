<template>
  <div class ="app">
    <UserCard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserCard from './components/UserCard.vue';


export default defineComponent({
  name: 'App',
  components: {
    UserCard
  }
});
</script>

<style>

</style>
