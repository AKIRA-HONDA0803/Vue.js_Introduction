<template>
  <div id="app">
    <counter/>
  </div>
</template>

<script>
import Counter from './components/Counter'

export default {
  name: 'app',
  components: {
    Counter: Counter
  }
}
</script>