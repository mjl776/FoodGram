<template>
<body>
  <img alt="FoodGram Logo" class = "logo" src="./assets/FoodGram.png">
  <div id="app">
    <Navbar/>
  </div>
</body>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar
  }, 
  data() {
  }
}
</script>

<style>


  body {
    margin: 0px;
  }
  
  .logo {

  }

</style>
