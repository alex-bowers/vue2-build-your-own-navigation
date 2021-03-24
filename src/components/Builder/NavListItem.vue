<template>
    <li class="item--form">
        <span class="item--form--header">Item {{ itemNumber }}</span>
        <span class="item--form--fields">
            <label for="listItemLabelField">Item Label:</label>
            <input
                @input="debounceSaveBlock"
                id="listItemLabelField"
                type="text"
                v-model="label"
            />
            <label for="listItemlHrefField">Item HREF:</label>
            <input
                @input="debounceSaveBlock"
                id="listItemlHrefField"
                type="text"
                v-model="href"
            />
        </span>
    </li>
</template>

<script>
import DebounceMixin from '../../mixins/debounce'

export default {
    mixins: [
        DebounceMixin
    ],
    props: {
        itemNumber: {
            default: null,
            type: Number
        },
        saveBlock: {
            default: null,
            type: Function
        }
    },
    data() {
        return {
            href: '',
            label: ''
        }
    }
}
</script>

<style coped>
.item--form,
.item--form--fields {
    display: flex;
    flex-direction: column;
}
.item--form--header {
    font-weight: 600;
}
</style>
