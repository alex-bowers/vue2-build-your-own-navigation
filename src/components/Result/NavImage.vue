<template>
    <a :href="$props.block.href">
        <img
            :src="$props.block.url"
            :alt="$props.block.altText"
        >
    </a>
</template>

<script>
export default {
    props: {
        block: {
            default: null,
            type: Object
        }
    }
}
</script>

<style scoped>
a {
    display: flex;
    justify-content: center;
    padding: 1rem;
}
img {
    width: 100%;
}
</style>
