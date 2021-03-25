<template>
    <div class="column-content">
        <button
            @click.prevent="addNewBlock"
        >+ Add new block</button>
        <div
            v-if="hasBlocks"
            class="column--blocks"
        >
            <div
                v-for="(block, columnIndex) in currentBlocksInColumn"
                :key="columnIndex"
                class="column--blocks--block"
            >
                <span class="block--header">
                    <h4>{{ createBlockHeader(columnIndex) }}</h4>
                    <button
                        @click.prevent="removeBlock(columnIndex)"
                    >Remove</button>
                </span>
                <button
                    @click.prevent="selectBlockChoice('NavImage', columnIndex)"
                    :class="{ 'selected': isSelectedButton(columnIndex, 'NavImage') }"
                    class="block--button block--button-image"
                >Image</button>
                <button
                    @click.prevent="selectBlockChoice('NavList', columnIndex)"
                    :class="{ 'selected': isSelectedButton(columnIndex, 'NavList') }"
                    class="block--button block--button-list"
                >List</button>
                <Component
                    :is="blocksContent[columnIndex]"
                    :columnNumber="columnNumber"
                    :blockNumber="columnIndex"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

import NavImage from './NavImage'
import NavList from './NavList'

export default {
    components: {
        NavImage,
        NavList
    },
    props: {
        columnNumber: {
            default: null,
            type: Number
        }
    },
    data() {
        return {
            blocksContent: {}
        }
    },
    computed: {
        currentBlocksInColumn() {
            return this.$store.state.columnsContent[this.$props.columnNumber - 1]
        },
        hasBlocks() {
            return Object.keys(this.currentBlocksInColumn).length
        }
    },
    methods: {
        addNewBlock() {
            this.$store.commit('addBlockToColumn', this.$props.columnNumber)
        },
        createBlockHeader(blockString) {
            const removeDash = blockString.replace('-', ' ')

            return removeDash.charAt(0).toUpperCase() + removeDash.slice(1)
        },
        isSelectedButton(block, type) {
            const currentBlock = this.blocksContent[block]

            return currentBlock && currentBlock === type
        },
        removeBlock(block) {
            Vue.delete(this.blocksContent, block)
            this.$store.commit('removeBlockFromColumn', {
                block: block,
                column: this.$props.columnNumber
            })
        },
        selectBlockChoice(type, block) {
            Vue.set(this.blocksContent, block, type)
        }
    }
}
</script>

<style scoped>
.column-content {
    margin-top: 0.5rem;
}

.column--blocks {
    display: flex;
    flex-wrap: wrap;
}

.column--blocks > .column--blocks--block {
    margin-right: 1rem;
}

.column--blocks--block {
    min-width: 300px;
    margin-top: 1rem;
}

.block--header {
    display: flex;
    margin-bottom: 0.5rem;
}

.block--header button {
    margin-left: 2rem;
}

.block--button {
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
    width: 100px;
}

.block--button.selected {
    background-color: skyblue;
}

.block--button-image {
    margin-right: 1rem;
}
</style>
