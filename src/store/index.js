import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon:[
      { id: 1, name: "Caterpie", img: "https://i.imgur.com/A21Gpql.png" },
      { id: 2, name: "Snorlax", img: "https://i.imgur.com/TGf6qB8.png" },
      { id: 3, name: "Pikachu", img: "https://i.imgur.com/fmMERCo.png" },
      { id: 4, name: "Abra", img: "https://i.imgur.com/f59APqT.png" },
      { id: 5, name: "Dratini", img: "https://i.imgur.com/K9DxFvF.png" },
      { id: 6, name: "Charmander", img: "https://i.imgur.com/KuZEzvo.png" },
      { id: 7, name: "Eevee", img: "https://i.imgur.com/zHg4gnJ.png" },
      { id: 8, name: "Mankey", img: "https://i.imgur.com/FQyOh1f.png" },
      { id: 9, name: "Meowth", img: "https://i.imgur.com/MVntz6D.png" },
      { id: 10, name: "Pidgey", img: "https://i.imgur.com/Rgc0OHA.png" },
      { id: 11, name: "Bulbasaur", img: "https://i.imgur.com/e7VtLbo.png" },
      { id: 12, name: "Jigglypuff", img: "https://i.imgur.com/SU7yF1f.png" }
    ]
  },
  mutations: {
    removePokemon: (state, id) => {
      state.pokemon = state.pokemon.filter(p => {
        return p.id != id;
      })
    }
  },
  actions: {
    runRemovePokemon: ({ commit }, id) => {
      commit("removePokemon", id);
    }
  },
  modules: {}
})
