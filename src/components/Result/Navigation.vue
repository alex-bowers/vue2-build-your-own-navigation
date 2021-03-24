<template>
    <div
        class="navigation"
    >
        <div
            v-for="(column, index) in columnsContent"
            :key="index"
            class="navigation--column"
        >
            <Component
                v-for="(block, index) in column"
                :key="index"
                :block="block"
                :is="block.type"
            />
        </div>
    </div>
</template>

<script>
import NavImage from "./NavImage"
import NavList from "./NavList"

export default {
    components: {
        NavImage,
        NavList
    },
    computed: {
        columnsContent() {
            return this.$store.state.columnsContent
        }
    }
}
</script>

<style scoped>
.navigation {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #03a9f4;
    color: white;
    margin-top: 1rem;
    padding: 1rem;
}


@media (min-width: 1024px) {
    .navigation {
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-evenly;
    }
    .navigation--column {
        width: 25%;
    }
}
</style>
