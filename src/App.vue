<template>
<body>
    <img alt="FoodGram Logo" class = "logo" src="./assets/logo.png"/>
    
    <div id="app">
      <header class = "navbar">
          <Navbar/>
      </header>
      <router-view></router-view>
    </div>
</body>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>

  body {
    margin: 0px;
    background-color:#FFF8DC

    /* background:url('./components/photos/background.png');
    background-size: 1560px;
    background-repeat: no-repeat;
    */
  }
  
  .logo {
    float: left;
    padding: 10px;
  }

  .navbar {
      background-color:lightblue
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
    text-decoration: underline;
    text-transform: bold;
}

</style>
