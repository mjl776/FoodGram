<template>
    <div>
        <h1>
             <input type="text" placeholder="Search.."> 
        </h1>
    </div>
</template>

<script>

export default {
    name: 'Searchbar'
}

</script>

<style scoped>

    h1 input[type=text] {
        float: right;
        padding: 6px;
        border: none;
        position:absolute;
        right: 3%;
        top:10%;
        text-align: left;
        font-size: 17px;
    }

    
</style>