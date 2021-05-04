<template>
  <div id="Gallery">
    <h1>Pokemon Gallery</h1>
    <h4>Description</h4>
    <button @click="toggleEditable">
      <span v-if="editable">Save</span>
      <span v-else>Edit</span>
    </button>
    <div v-if="editable">
      <textarea v-model="description"></textarea>
    </div>
    <div v-else>
      {{ description }}
    </div>
    <h4>Regions our Pokemon are from</h4>
    <ul>
      <li
        :id="region"
        v-for="region in regions"
        @mouseover="addRegionColor(region)"
        @mouseleave="clearRegionColor(region)"
      >{{ region }}</li>
    </ul>
    <h4>Gallery</h4>
    <div id="main">
      <div class="grid">
        <div class="card" v-for="pokemon in pokemon" @click="removePokemon(pokemon.id)">
          <img :src="pokemon.img"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'Gallery',
  data() {
    return {
      editable: false,
      description:"Test description of gallery",
      regions: ["Johto", "Kanto", "Sinoh", "Hoenn"],
      buttonColors: {
        Johto: "#27c476",
        Kanto: "#27c4bc",
        Sinoh: "#27a5c4",
        Hoenn: "#757cfa",
      }
    }
  },
  methods: {
    toggleEditable() {
      this.editable = !this.editable
    },
    addRegionColor(region) {
      document.getElementById(region).style.backgroundColor = this.buttonColors[region];
    },
    clearRegionColor(region) {
      document.getElementById(region).style.backgroundColor = "";
    },
    removePokemon(id) {
      store.dispatch('runRemovePokemon', id);
    }
  },
  computed: {
    pokemon() {
      return store.state.pokemon
    }
  }
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
