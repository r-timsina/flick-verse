<script setup>
const query = ref("");

const { data, error, pending, refresh } = await useFetch(
  `http://www.omdbapi.com/`,
  { query: { apikey: "68d99cc1", s: query } }
);
</script>
<template>
  <div class="bg-secondary h-screen">
    <form class="w-full py-24 flex items-center justify-center gap-10">
      <input
        class="md:w-1/3 h-16 border rounded-sm p-6"
        type="text"
        placeholder="Search a movie"
        v-model="query"
      />
      <button class="bg-primary border rounded-sm w-24 h-10">Search</button>
    </form>
    <div class="w-full flex justify-items-center">
      <div class="flex flex-col gap-6 md:w-1/3">
        <ul v-for="movie in data.Search" :key="movie.imdbID">
          <li class="flex">
            <div>
              <img :src="movie.Poster" class="w-24 h-24 fit-content" />
            </div>
            <div class="text-white m-2">
              <div>{{ movie.Title }}</div>
              <div>{{ movie.Year }}</div>
              <div>{{ movie.Type }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
