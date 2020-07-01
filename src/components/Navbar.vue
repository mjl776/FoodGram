<template>
        <div class = nav>
            <a href= "#foodgram" class = "logo"> FoodGram </a>
            <input type="text" placeholder="Search.."> 
            <a href= "#what's good"> What's Good </a>
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
    
    .nav a.logo {
        font-size: 30px;
        text-align: center;
        display: block;
        color: #4B0082;
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