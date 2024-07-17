<script setup>
const query = ref("");

const onSubmit = () => {};

const { data, error, pending, refresh } = await useFetch(
  `http://www.omdbapi.com/`,
  { query: { apikey: "68d99cc1", s: query } }
);
</script>
<template>
  <div class="bg-secondary h-screen">
    <form class="w-full py-24 flex items-center justify-center gap-10">
      <input
        class="w-1/3 h-16 border rounded-sm p-6"
        type="text"
        placeholder="Search a movie"
        v-model="query"
      />
      <button class="bg-primary border rounded-sm w-24 h-10">Search</button>
    </form>
    <div class="">
      {{ data }}
    </div>
  </div>
</template>
