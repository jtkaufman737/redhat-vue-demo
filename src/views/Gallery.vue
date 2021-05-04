<template>
  <div id="Gallery">
    <h1>Pokemon Gallery</h1>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>
<style scoped>
div#Gallery {
  padding:5% 20% 10% 20% ;
}

div#main {
  width:50%;
  height:60vh;
  margin:auto;
}

div.grid {
  height:100%;
  width:100%;
  display: grid;
  grid-template-columns:18% 18% 18% 18% 18%;
  grid-template-rows:18% 18% 18% 18% 18%;
}

div.card img {
  height:80px;
  width:80px;
  margin:5px;
  border-radius:7px;
  border:.5px black solid;
}

div.card img:hover {
  height:80px;
  width:80px;
  margin:5px;
  border-radius:7px;
  border:.5px lightgray solid;
}

div.card {
  margin:5px;
  padding:5px;
  height:120px;
  width:120px;
  padding:5px;
  display:flex;
  justify-content:space-around;
  vertical-align:center;
}

li {
  width:80px;
  border-radius:7px;
  padding:4px;
}
</style>
