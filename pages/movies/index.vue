<script setup>
const query = ref("batman");

// const search = async () => {
//   const { data, error } = await useFetch(
//     `http://www.omdbapi.com/?apikey=68d99cc1&s=${query.value}`
//   );
//   movies.value = Search;
//   query.value = "";
// };

const { data, error, pending, refresh } = await useFetch(
  `http://www.omdbapi.com/`,
  { query: { apikey: "68d99cc1", s: query } }
);
</script>
<template>
  <div class="flex justify-center">
    <form @submit.prevent="search">
      <input type="text" v-model="query" class="border" />
      <div class="flex justify-center"><button>Search</button></div>
    </form>
  </div>

  <div class="" v-if="pending">loading...</div>
  <button @click="refresh">refresh</button>

  <div class="flex flex-wrap justify-center gap-10">
    <ul v-for="movie in data.Search" :key="movie.imdbID">
      <li>
        <nuxt-link :to="{ name: 'movies-id', params: { id: movie.imdbID } }"
          >{{ movie.Title }}<img :src="movie.Poster"
        /></nuxt-link>
      </li>
    </ul>
  </div>
</template>
