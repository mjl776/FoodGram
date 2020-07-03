<template>
    <div class = nav>
        <ul>
            <li> <a href = "#whatshot"> What's hot </a> </li>
            <li> <a href = "#Resteraunts"> Resteraunts </a> </li>
            <li> <a href = "#Accounts"> Account </a> </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: 'Searchbar'
}

</script>

<style scoped>

    .nav {
        background: linear-gradient(-90deg,#FA8072,#00FFFF);
        height: 100px;
        margin-bottom: 15px;
    }


    .nav input[type=text] {
        float: right;
        padding: 4px;
        border: none;
        margin-top: 8px;
        margin-right: 16px;
        font-size: 17px;
    }

</style>