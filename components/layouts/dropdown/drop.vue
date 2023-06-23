<template>
  <div class="dropdown">
    <button class="dropdown-toggle" @click="toggleDropdown">
         img
            </button>
    <div v-if="isOpen" class="dropdown-menu">
      <div
        v-for="option in options"
        :key="option"
        class="dropdown-option"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>
  
  <script>
  export default {
  
  };
  </script>
  
  <style>
  
</style>
