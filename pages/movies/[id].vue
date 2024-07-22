<script setup>
definePageMeta({
  // middleware: "logger",
});
const id = useRoute().params.id;

const { data, error, pending, refresh } = await useFetch(
  `http://www.omdbapi.com/`,
  {
    query: { apiKey: "68d99cc1", i: id },
    // pick: ["Title", "Year", "Plot", "Error"],
    key: `/movies/${id}`,
  }
);

if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "page not founnd" });
}

console.log(data.value.error);
useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter", content: "my Twitter app" },
  ],
});
</script>
<template>
  {{ data }}
  <div class="" v-if="error">Upps! NaN</div>
</template>
