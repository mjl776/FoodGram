<template>
  <div id="app">
    <Title/>
    <Searchbar/>
  </div>
</template>

<script>
import Title from './components/Title'
import Searchbar from './components/Searchbar'

export default {
  name: 'app',
  components: {
    Title,
    Searchbar
  }, 
  data() {
  }
}
</script>

<style>

</style>
