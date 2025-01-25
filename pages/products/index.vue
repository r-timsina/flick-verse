<template>
  <!-- <div class="container mx-auto my-8">
    <h2 class="text-3xl font-bold text-center mb-6">Schoolwear Uniforms</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div
        v-for="product in products"
        :key="product.id"
        class="border p-4 rounded shadow-lg"
      >
        <img
          :src="product.image"
          alt="Uniform Image"
          class="w-full h-48 object-cover mb-4 rounded"
        />
        <h3 class="text-xl font-semibold">{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="font-bold mt-2">${{ product.price.toFixed(2) }}</p>
        <button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { ref } from "vue";

// const products = ref([
//   {
//     id: 1,
//     name: "White School Shirt",
//     description: "100% Cotton, available in sizes S to XL.",
//     price: 19.99,
//     image: "/images/shirt.jpg",
//   },
//   {
//     id: 2,
//     name: "Navy Blue School Pants",
//     description: "Durable fabric, available in sizes S to XL.",
//     price: 29.99,
//     image: "/images/pants.jpg",
//   },
//   {
//     id: 3,
//     name: "Grey School Jumper",
//     description: "Warm and comfortable, available in sizes S to XL.",
//     price: 34.99,
//     image: "/images/jumper.jpg",
//   },
//   // Add more products as needed.
// ]);
</script>

<style scoped>
/* Add any specific styles here */
</style>
