<template>
<body>
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

</style>
