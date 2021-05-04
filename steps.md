## Notes for presentation

### Running the App

First thing I want to do is show you two ways you can run the application. Each are pretty cool
The first, and the one I use the most is the command line interface (CLI). To run the dev server you would go ahead and type `npm run serve` from the command line. We can then see our app running.

We also can type vue/ui, navigate to tasks, and either run a dev or production build. We get a ton of options through Vue UI, and this is a really nice feature on bigger teams where you may have a
designer who codes a little but isn't knee deep in the javascript ecosystem.

Looking at Vue UI, just to explore some of the options, we can look at our project plugings - there is the CLI service we just tested earlier, Cypress which is a testing framework. There is something called PWA support which is related to something called progressive web apps which deal with responsiveness and application uptime.

We can see we have Vuex installed. We can also take a look at our project dependencies, and see what other software packages our software is using - Vue, vue-router, Vuex, all stuff I've talked a little bit about to you. Sass is a preprocessor for styles, chai is used in testing. Under project configuration, we can change some of the setting related to how the project builds, where it puts built and optimized files before it gets deployed.

Under PWA you see some things like "Theme color" and "windows app tile color" - those are how the application would appear if it were downloaded like an application from the app store. They are all set up to get a little iPhone or Android icon and this gives you some tools to change how those appear.

And last but not least we get to project tasks, which is where you spend a lot of time. If I were about to deploy this application I could come to this dashboard and hit build, which we can experiment with really quick. It will give you a status, tell you how fast your site would load across different networks. Give you some information about how much space your different dependencies took up in the built files.

## Basics: Component data, data-binding and directives

### Component data

To kick the tires of Vue and show you some of the super convenient features it has, lets first look at some of the capabilities it has for data binding. Let's add an editable description field to our pokemon gallery. I'm going to start by first adding a data field to our component called "description"

```
  data() {
    return {
    +  description: 'Test description of gallery'
    }
  },
```

### Data Binding

For data binding, we are going to get into the Vue template. I realized I haven't talked too much about the template, and so I guess the takeaway I'd want to give you is that for the most part Vue templates can do anything HTML can do, and they also give you some extra tools on top which are really nice.

Now that we've talked about that a bit, I'm going to create a textarea and use that property through _two way data binding_. The way you do that is the v-model keyword. That binds the component data to the value of the markup element.

```
<div id="Gallery">
  <h1>Pokemon Gallery</h1>
  + <h4>Description</h4>
  + <textarea v-model="description"></textarea>
</div>
```

This is a good point to stop and talk a little bit about something I touched on briefly which is Vue devTools. A lot of JavaScript frameworks have this, Vue's is arguably the best in class. It has too many features for me to talk about right now but trust me that it is amazing.

To start, lets open DevTools and see our component data change in real time. This is proving that the HTML element and component data have two way binding enabled. It is very convenient for things like forms, so that all the data is perfectly up to date when you hit "submit" and can conveniently reference it to send it through an API call. You can also edit fields in devtools and see them populate your running app, which can be very helpful for debugging and testing.

### Directives

At this point, we are in kind of a handy spot to talk about *directives*. Directives became popular with Angular as far as I'm aware, and they are a feature people really like about Angular framework that are not present in React. Directives are perfect for cases where you basically wish there was logic to do something like "if the form isn't finished, hide this button". Directives are perfect for that.  

```
// added under h6
<div v-if="editable">
  <textarea v-model="description"></textarea>
</div>
<div v-else>
  <p>{{ description }}</p>
</div>
```

Added to component data:

`editable: false,`

This introduces one new thing we haven't seen before which is {{ curly braces }}. Curly braces in a Vue single file component mean that you want to display content from the component data that is read only. The reason we use curly braces and not v-model in the second half of the if/else statement is that we don't want the data to be updated or changeable if it is not in edit mode, in this specific example. Now let's see how this works out.

Another example we could use would be if we wanted to display regions that the pokemon in our pokemon gallery were from. The first thing I'd do to do that would be to add an array to our component data, with some regions. One note here. Your component data can be any kind of valid data type that's valid javascript. It could be an object, a boolean, a string, a number. In this case we're talking about data that's like a list, so I'm going to work with an array.

We are going to use a different type of directive than our last one (v-if), and instead do v-for.

```
+ <h4>Regions our Pokemon are from</h4>
+<ul>
+  <li v-for="region in regions">{{ region }}</li>
+</ul>
```

V-for is like a for loop as you probably gathered. We can test really quick whether what we did just worked. And cool, it looks like it did. There are a lot more directives than what we just discussed, but those are a couple that I use the most.

## Basics: Component Methods

As you can imagine, when you are building web pages there is a lot of behavior that people are interested in. For JavaScript you need functions to deal with behavior, not everything can be handled through directives.

The place for local functions that are only needed by one component is in a section of the component called `methods`. The structure of methods is just a JavaScript object which contains functions. Let's declare one called `toggleEditable`.

**A quick note about this** Not sure how many JavaScript people we have in here, but this is a JavaScript concept used to refer basically to local context. In the case of the Vue app, when you use "this" it is referring to the Vue component you are in. So you can do stuff like this.method() to call a method in the methods section, or you can log this.editable and print any field in the data section of the app. It is a little confusing and not really important to get into for this app, but what I'd ask you to remember is that here we are referring to this, our Vue component, basically all the JavaScript in this file is accessible through the keyword `this`.

So for this function, we are going to set the data property "editable" (this.editable) to whatever the OPPOSITE is of what it currently is. So if it's true, we are going to make it false. We just want this button to change it from editable to non-editable.

```
+ methods: {
+   toggleEditable() {
+     this.editable = !this.editable
+   }
+ }
```

You may have one question. At this point we haven't said anything about how we would trigger our component methods from a button click. What might have looked like this in traditional JavaScript:

```
document.getElementById('myButton').addEventListener('click', () => {
  runMyFunction();
})
```

Has been reduced into very convenient shorthand in Vue. In Vue, all you would do would be put an attribute @click on your button element, with the name of the function you want to call. I'll show you what that looks like in a second, but I briefly want to touch on all the things you can do this with. You can add actions based on hovering on an element, putting a key down or up, clicking, or the mouse entering the elements space on the page.

For us to do that, lets create a button with a @click method on it, and some conditional text inside that either says "edit" or "save" depending on what the user is doing.

```
<button @click="toggleEditable">
  <span v-if="editable">Save</span>
  <span v-else>Edit</span>
</button>
```

You can see now that we actually have a savable edit state for our application and a very convenient way to make clickable elements fire off functions. A lot of Vue is convenient like that and that's a reason it is so beloved.

## Combining Concepts

Now it may not feel like it, but even just understanding event driven behavior, component methods, and directives is enough to let you get a reasonable amount of work done in Vue without too much trouble and pretty quickly.

If we wanted to take a couple of ideas we've already looked at and expand them to see how this dynamic data can help us make interfaces that are alive and engaging, I have a little illustrative task we can do. Let's add some functionality so that when you hover over the regions our pokemon are from, they get a background color. Let's make them unique, by mapping each region to a specific color.

```
+ buttonColors: {
+  Johto: "#27c476",
+  Kanto: "#27c4bc",
+  Sinoh: "#27a5c4",
+  Hoenn: "#757cfa",
+ }
```

Now, let's add some logic to our list item elements so when you mouseover them, they get colored in and when you move the mouse away they return to normal. To do that, we are going to use our shortcuts @mouseover and @mouseleave.

```
<li
  v-for="region in regions"
+  :id="region"
+  @mouseover="addRegionColor(region)"
+  @mouseleave="clearRegionColor(region)"
>{{ region }}</li>
```

We are then going to need to define the two functions those events are trying to call. Again, we will go back to our component methods for that.

```
  },
+ addRegionColor(region) {
+  document.getElementById(region).style.backgroundColor = this.buttonColors[region];
+ },
+ clearRegionColor(region) {
+  document.getElementById(region).style.backgroundColor = "";
+ }
}
```

If we check out our code now, we can see that both events are firing. They receive the region, and they either grab that element by id and remove the background color, or add the background color by taking the id and getting the key value of our `buttonColors` property.

One thing you may have noticed as I was doing it was a small piece of new syntax that I will stop for a second and talk about. This syntax is :id. HTML has attributes, like style, src, and many others that can be altered to work with dynamic component data. In this case, we told our list item to take the dynamic value of whatever region in regions we were on, and set the id of the list item to that. If we did id without the colon, this would set the id to the string "region" instead of variable data. You can do this with lots of things, and later on we are going to do it with the src attribute of images.

We can actually check this, again using our handy Vuex devtools. Lets change it from :id to id and watch what happens.

## State Management

This is maybe a more intermediate topic, and I don't expect anyone to walk away from this with a perfect understanding of Vuex because this is a short talk. My overall goal though is just to show you how approachable Vuex can be. There are JavaScript state management systems that have reputations for just being an absolute bear to learn, the one I hear that the most about is Redux. I wanted to cover this even if its a very short example just to show you that yes, you can essentially hit the ground running with Vue's state management system even if you don't have a background in it or Vue necessarily.

It boils down to three main pieces of information:
* **State** a property on an object that hold data that's needed in multiple places in our application. Usually that's how you know if something should be component data or in state. If multiple components use the information, state is like the central place to keep it and make it easily available to them
* **Mutations** are functions with one job: they change state.
* **Actions** are also functions with one job: they commit mutations

This chart is from the Vuex docs. It is somewhat straightforward although it takes a little while to figure out how to deal with each of these pieces. For us, I think one of the first things we'd want to do in a pokemon app is have information on our pokemon centrally located.

```
+ pokemon:[
+   { id: 1, name: "Caterpie", img: "https://i.imgur.com/A21Gpql.png" },
+   { id: 2, name: "Snorlax", img: "https://i.imgur.com/TGf6qB8.png" },
+   { id: 3, name: "Pikachu", img: "https://i.imgur.com/fmMERCo.png" },
+   { id: 4, name: "Abra", img: "https://i.imgur.com/f59APqT.png" },
+   { id: 5, name: "Dratini", img: "https://i.imgur.com/K9DxFvF.png" },
+   { id: 6, name: "Charmander", img: "https://i.imgur.com/KuZEzvo.png" },
+   { id: 7, name: "Eevee", img: "https://i.imgur.com/zHg4gnJ.png" },
+   { id: 8, name: "Mankey", img: "https://i.imgur.com/FQyOh1f.png" },
+   { id: 9, name: "Meowth", img: "https://i.imgur.com/MVntz6D.png" },
+   { id: 10, name: "Pidgey", img: "https://i.imgur.com/Rgc0OHA.png" },
+   { id: 11, name: "Bulbasaur", img: "https://i.imgur.com/e7VtLbo.png" },
+   { id: 12, name: "Jigglypuff", img: "https://i.imgur.com/SU7yF1f.png" }
+ ]
},
```

We then are going to import the store, using this @ which is an alias on Vue imports basically to say look in the /src folder.

We want our component to keep track of any changes that may happen in the store, so Vue has a handy way to organize values that you want to keep constantly up to date. There is a section you can add to Single File components called "computed properties" that magically evaluates values for changes under the hood. We are going to use that here. These take the form of a function, with the name you want the data accessible by. If I name my computed property "pokemon", the data "pokemon" will be available throughout this component now.

```
},
+ computed: {
+   pokemon() {
+     return store.state.pokemon;
+   }  
+ }
```

To see if that worked, and if we are now pulling the values from Vuex, let's iterate over the Pokemon and see what we get.

```
+ <h4>Gallery</h4>
+ <div id="main">
+   <div class="grid">
+     <div class="card" v-for="pokemon in pokemon">
+       <img :src="pokemon.img"/>
+     </div>
+   </div>
+ </div>
</div>
```

Voila! So now this is a stretch goal depending on time but we can also show you briefly how we could add an action and a mutation and change data in the store the "Vue" way. Let's start by adding a mutation. This mutation is going to filter the array for everything except the current pokemon, and set the state value equal to this new array minus that element.

```
},
mutations: {
  + removePokemon: (state, id) => {
  +   state.pokemon = state.pokemon.filter(p => {
  +     return p.id != id;
  +   })
  + }
},
actions: {},
```

Right now, there is nothing to call our mutation so nothing is happening. If you remember we need an action to trigger the change to state. I'm going to define the action as just another function
but you will notice one interesting piece of syntax, which is that I'm going to pass the keyword { commit } in curly braces. Commit is a special action available to the vue store to run mutation events. We don't need to get into it in depth here, but it is the special keyword used by Vue to run mutations. So we are going to commit the mutation with an argument of "id".  

```
 actions: {
+  runRemovePokemon: ({ commit }, id) => {
+    commit("removePokemon", id);
+  }
},
```

We need a couple last things before this is finalized. We need a click event to kick off the chain of events, and something to tell our action to run as well. Let's add that now.

```
<div class="grid">
  + <div class="card" v-for="pokemon in pokemon" @click="removePokemon(pokemon.id)">
    <img :src="pokemon.img"/>
  </div>
```

```
+ removePokemon(id) {
+  store.dispatch('runRemovePokemon', id);
+ }
```
