<template>
    <div class="list--details">
        <h5>Sub List</h5>
        <div class="list--details-form">
            <div class="list--details-form--header">
                <label for="subListHeaderTextField">Header:</label>
                <input
                    id="subListHeaderTextField"
                    type="text"
                    v-model="header.text"
                />
                <label for="subListHeaderHrefField">HREF:</label>
                <input
                    id="subListHeaderHrefField"
                    type="text"
                    v-model="header.href"
                />
            </div>
            <label for="subListNumberOfItemsField">Number of list items:</label>
            <input
                id="subListNumberOfItemsField"
                min="1"
                type="number"
                v-model="numberOfListItems"
            />
            <div
                v-if="numberOfListItems"
            >
                <ul>
                    <div
                        v-for="(item, index) in listContent"
                        :key="index"
                        ref="listItems"
                    >
                        <span class="item--form--header">Item {{ index }}</span>
                        <span class="item--form--fields">
                            <label for="listItemLabelField">Item Label:</label>
                            <input
                                id="listItemLabelField"
                                type="text"
                                v-model="listContent[index].label"
                            />
                            <label for="listItemlHrefField">Item HREF:</label>
                            <input
                                id="listItemlHrefField"
                                type="text"
                                v-model="listContent[index].href"
                            />
                        </span>
                    </div>
                </ul>
            </div>
        </div>
        <button @click.prevent="saveList">Test</button>
    </div>
</template>

<script>
import Vue from "vue";

export default {
    props: {
        saveSubList: {
            default: null,
            type: Function
        }
    },
    data() {
        return {
            header: {
                href: '',
                text: ''
            },
            listContent: {
                1: {
                    href: '',
                    label: ''
                }
            },
            numberOfListItems: 1,
            type: 'SubListForm',
        }
    },
    watch: {
        numberOfListItems(val) {
            const listContentLength = Object.keys(this.listContent).length
            const parsedVal = parseInt(val, 10)

            if (listContentLength > parsedVal) {
                for (const key in this.listContent) {
                    if (Object.prototype.hasOwnProperty.call(this.listContent, key)) {
                        if (key > parsedVal)
                            Vue.delete(this.listContent, key)
                    }
                }
            } else {
                for (let i = listContentLength; i < parsedVal; i++) {
                    Vue.set(this.listContent, parsedVal, {
                        href: '',
                        label: ''
                    })
                }
            }
        }
    },
    methods: {
        saveList() {
            this.saveSubList(this.$data)
        }
    }
}
</script>

<style scoped>
.list--details,
.list--details-form,
.list--details-form--header {
    display: flex;
    flex-direction: column;
}

.list--details {
    padding-left: 1rem;
    margin: 1rem 0;
}
ul {
    padding: 0;
}
</style>
