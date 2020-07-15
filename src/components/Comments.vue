<template>
    <form class = "comments">
        <p> Comments </p>    
        <p>
            <label for="name">Username:</label>
            <input id="name" v-model="name">

            <label for="review">Comment:</label>      
            <textarea id="review" v-model="review"></textarea>
        </p>
    </form>
</template>

<script>
export default {
    name: 'Comments',
    data () {
		return {
			name: null,
			review: null,
            errors: []
		}
	}
}
</script>

<style scoped>
    .comments {
        display: inline-block;
        border: solid blue 0.5px;
    }
</style>