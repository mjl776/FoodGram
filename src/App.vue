<template>
<body>
    <img alt="FoodGram Logo" class = "logo" src="./assets/FoodGram.png"/>
    <div id="app">
      <header>
          <Navbar/>
      </header>
    <FoodPages/>
    </div>
  

</body>
</template>

<script>
import Navbar from './components/Navbar'
import FoodPages from './components/FoodPages'

import Vue from 'vue';
export const EventBus = new Vue();

export default {
  name: 'app',
  components: {
    Navbar,
    FoodPages
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
    float: left;
  }

  header {
      background: linear-gradient(-90deg,#FA8072,#00FFFF);
  }

  header::after {
      content: '';
      display: table;
      clear: both;
  }

  nav li {
    display: inline-block;
    margin-left: 70px;
    padding-top: 25px;


    position: relative;
}

nav a {
    color:green;
    text-decoration: none;
    text-transform: uppercase;
}

</style>
