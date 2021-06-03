<template>
    <div
        class="navigation"
    >
        <div
            v-for="(column, index) in orderColumns(columnsContent)"
            :key="index"
            class="navigation--column"
        >
            <Component
                v-for="(block, index) in orderBlocks(column.blocks)"
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
    },
    methods: {
        orderBlocks(blocks) {
            return Object.values(blocks).sort(this.sortArray)
        },
        orderColumns(columns) {
            return Object.values(columns).sort(this.sortArray)
        },
        sortArray(a, b) {
            if (a.position < b.position) {
                return -1
            }

            if (a.position > b.position) {
                return 1
            }

            return 0
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

.navigation--column {
    position: relative;
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
