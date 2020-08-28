<template>
    <div class = "container">
        <nav>
        <ul>
            <li> <router-link tag = "a" to = "/"> Explorer Page</router-link></li>
            <li><router-link tag = "a" to = "/Restaurants"> Restaurants </router-link> </li>
            <li> <router-link tag = "a" to = "/Accounts"> Accounts </router-link> </li>
            <input type="text" placeholder="Search..">
        </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}

</script>

<style scoped>

    nav {
        float: right;
        font-family: Georgia;
    }

    .container {
        width: 80%;
        margin: 0 auto;
        font-family: Georgia;
    }

    nav input[type=text] {
        float: left;
        padding: 8px;
        border: none;
        margin-top: 17px;
        margin-right: 16px;
        font-size: 17px;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    nav li {
        display: inline-block;
        margin-left: 70px;
        padding-top: 23px;

        position: relative;

    }

    nav a {
        text-decoration: none;
        text-transform: uppercase;
        color:black;
    }

    nav a:hover {
        color: turquoise
    }
    
    nav a::before {
        content: '';
        display: block; 
        height: 5px;
        background: green;

        position: absolute;
        top: 0;
        width: 0%;

        transition: all ease-in-out 250ms;
    }

    nav a:hover::before {
        width: 100%;
    }


</style>