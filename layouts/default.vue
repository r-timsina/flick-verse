<template>
  <header class="bg-gray-800 text-white p-4">
    <h1 class="text-lg font-bold">Schoolwear Uniform Store</h1>
    <nav>
      <ul class="flex space-x-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <slot />
</template>

<style scoped>
/* Add any specific styles here */
</style>
