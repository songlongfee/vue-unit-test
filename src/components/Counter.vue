<template>
  <div>
    <h3>Counter.vue</h3>
    <div class="num">{{ count }}</div>
    <button @click="increment">自增</button>
    <button @click="incrementByAsync">异步自增</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },

    methods: {
      increment () {
        this.count++
      },
      incrementByAsync () {
        setTimeout(() => {
          this.count++
        }, 1000);
      }
    }
  }
</script>
