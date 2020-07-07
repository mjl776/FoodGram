<template>
    <div class = "container">
        <nav>
        <ul>
            <li> <a href = "#whatshot"> What's hot </a> </li>
            <li> <a href = "#Resteraunts"> Resteraunts </a> </li>
            <li> <a href = "#Accounts"> Account </a> </li>
        </ul>
        </nav>
    </div>
</template>

<script>

export default {
    name: 'Searchbar'
}

</script>

<style scoped>

    nav {
        float: right;
    }
    
    .container {
        width: 80%;
        margin: 0 auto;
    }

    nav input[type=text] {
        float: right;
        padding: 4px;
        border: none;
        margin-top: 8px;
        margin-right: 16px;
        font-size: 17px;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

</style>