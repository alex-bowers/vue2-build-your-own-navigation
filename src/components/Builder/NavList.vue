<template>
    <div class="block--component">
        <h5>List</h5>
        <div class="block--details-form">
            <div class="block--details-form--header">
                <label for="listHeaderTextField">Header:</label>
                <input
                    @input="debounceSaveBlock"
                    id="listHeaderTextField"
                    type="text"
                    v-model="header.text"
                />
                <label for="listHeaderHrefField">HREF:</label>
                <input
                    @input="debounceSaveBlock"
                    id="listHeaderHrefField"
                    type="text"
                    v-model="header.href"
                />
            </div>
            <label for="listNumberOfItemsField">Number of list items:</label>
            <input
                @input="debounceSaveBlock"
                id="listNumberOfItemsField"
                min="1"
                type="number"
                v-model="numberOfListItems"
            />
            <div
                v-if="numberOfListItems"
            >
                <ul>
                    <NavListItem
                        v-for="item in parseInt(numberOfListItems)"
                        :key="item"
                        :itemNumber="item"
                        :saveBlock="saveBlock"
                        ref="listItems"
                    />
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

import DebounceMixin from '../../mixins/debounce'
import NavListItem from './NavListItem'

export default {
    mixins: [
        DebounceMixin
    ],
    components: {
        NavListItem
    },
    props: {
        blockNumber: {
            default: null,
            type: String
        },
        columnNumber: {
            default: null,
            type: Number
        }
    },
    data() {
        return {
            header: {
                href: '',
                text: ''
            },
            listContent: {},
            numberOfListItems: 1,
            type: 'NavList',
        }
    },
    methods: {
        saveBlock() {
            for (let i = 0; i < this.$refs.listItems.length; i++) {
                const {
                    itemNumber,
                    label,
                    href
                } = this.$refs.listItems[i]

                Vue.set(this.listContent, itemNumber, {
                    label,
                    href
                })

                this.$store.commit('updateColumnContent', {
                    block: this.$props.blockNumber,
                    column: this.$props.columnNumber,
                    data: this.$data
                })
            }
        }
    }
}
</script>

<style scoped>
.block--details-form--header {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
}

ul {
    padding-inline-start: 0;
}
</style>
