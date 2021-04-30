<template>
  <div id="Gallery">
    <h1>Pokemon Gallery</h1>
    <h6><pre>// TODO gallery</pre></h6>
    <main>
      <div class="grid">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {

    }
  },
  methods: {},
}
</script>
<style scoped>
main {
  width:100%;
  height:60vh;
  margin:auto;
}

div.grid {
  height:100%;
  width:100%;
  display: grid;
  grid-template-columns:20% 20% 20% 20% 20%;
  grid-template-rows:20% 20% 20% 20% 20%;
}

div.card {
  margin:auto;
  height:80%;
  width:80%;
}
</style>
