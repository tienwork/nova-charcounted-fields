<template>
  <p class="flex-1 text-right font-bold opacity-50 text-80 text-xs mt-2">
    <span :class="indicatorClass">{{ value.length }}</span
    ><span v-if="maxChars"> / {{ maxChars }}</span>
  </p>
</template>
<style scoped>
  .text-orange {
      color: #f6993f;
  }
</style>
<script>
export default {
  props: ['value', 'maxChars', 'warningThreshold'],

  computed: {
    indicatorClass: function () {
      if (this.maxChars) {
        if (this.value.length > this.maxChars) {
          return 'text-red-500';
        }
      }

      if (this.warningThreshold) {
        if (this.value.length > this.warningThreshold) {
          return 'text-orange';
        }
      }

      return 'text-green-700';
    },
  },
};
</script>
