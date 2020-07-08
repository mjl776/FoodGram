<template>
    <div class = "container">
        <nav>
        <ul>
            <li> <a href = "#whatshot"> What's hot </a> </li>
            <li> <a href = "#Resteraunts"> Resteraunts </a> </li>
            <li> <a href = "#Accounts"> Account </a> </li>
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

</style>