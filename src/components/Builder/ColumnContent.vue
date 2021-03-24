<template>
    <div>
        <h3>Column {{ $props.columnNumber }}</h3>
        <label for="blocksInColumnField">Number of Blocks: </label>
        <input
            type="number"
            id="blocksInColumnField"
            min="1"
            v-model="numberOfBlocks"
        />
        <div
            v-if="numberOfBlocks > 0"
            class="column--blocks"
        >
            <div
                v-for="block in parseInt(numberOfBlocks)"
                :key="block"
                class="column--blocks--block"
            >
                <h4>Block {{ block }}</h4>
                <button
                    @click.prevent="selectBlockChoice('NavImage', getBlockKey(block))"
                    :class="{ 'selected': isSelectedButton(block, 'NavImage') }"
                    class="block--button block--button-image"
                >Image</button>
                <button
                    @click.prevent="selectBlockChoice('NavList', getBlockKey(block))"
                    :class="{ 'selected': isSelectedButton(block, 'NavList') }"
                    class="block--button block--button-list"
                >List</button>
                <Component
                    :is="blocksContent[getBlockKey(block)]"
                    :columnNumber="columnNumber"
                    :blockNumber="getBlockKey(block)"
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
            blocksContent: {},
            numberOfBlocks: 1
        }
    },
    methods: {
        getBlockKey(block) {
            return `block-${block - 1}`
        },
        isSelectedButton(block, type) {
            const currentBlock = this.blocksContent[this.getBlockKey(block)]

            return currentBlock && currentBlock === type
        },
        selectBlockChoice(type, block) {
            Vue.set(this.blocksContent, block, type)
        }
    }
}
</script>

<style scoped>
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

.block--button-list {

}
</style>
