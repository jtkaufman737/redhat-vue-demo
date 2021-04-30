<template>
  <div id="app">
    <Gallery/>
    <router-view/>
  </div>
</template>
<script>
import Gallery from '@/views/Gallery'

export default {
  components: ['Gallery']
}
</script>
