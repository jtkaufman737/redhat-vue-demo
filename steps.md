## Notes for presentation

### Running the App

First thing I want to do is show you two ways you can run the application. Each are pretty cool
The first, and the one I use the most is the command line interface (CLI). To run the dev server you would go ahead and type `npm run serve` from the command line. We can then see our app running.

We also can type vue/ui, navigate to tasks, and either run a dev or production build. We get a ton of options through Vue UI, and this is a really nice feature on bigger teams where you may have a
designer who codes a little but isn't knee deep in the javascript ecosystem.

## Basics: Component data, data-binding and directives

To kick the tires of Vue and show you some of the super convenient features it has, lets first
look at some of the capabilities it has for data binding. Let's add an editable description field
to our pokemon gallery and take a look at that.

```
<template>
  <div id="Gallery">
    <h1>Pokemon Gallery</h1>
    <h6>Description</h6><br/>
    <textarea v-model="description"></textarea>
    <main>
      <div class="grid">
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      description: 'Test description of gallery'
    }
  },
  methods: {},
}
</script>
```

We then can open DevTools and see our component data change in real time. This is proving that the HTML element and component data have two way binding enabled. It is very convenient for things like forms, so that all the data is perfectly up to date when you hit "submit" and can conveniently reference it to send it through an API call. You can also edit fields in devtools and see them populate your running app, which can be very helpful for debugging and testing. 

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
