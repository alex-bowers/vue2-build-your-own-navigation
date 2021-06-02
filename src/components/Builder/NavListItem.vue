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
        <button
            @click.prevent="toggleListButton"
        >{{ actionLabel }}</button>
        <SubListForm
            v-if="isEditingSubList"
            :list="subList"
            :saveSubList="saveSubList"
        />
    </li>
</template>

<script>
import DebounceMixin from '../../mixins/debounce'
import SubListForm from './SubListForm'

export default {
    mixins: [
        DebounceMixin
    ],
    components: {
        SubListForm
    },
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
            isEditingSubList: false,
            label: '',
            subList: null
        }
    },
    computed: {
        actionLabel() {
            return this.isEditingSubList
                ? 'Remove Sub List'
                : 'Add Sub List'
        }
    },
    methods: {
        saveSubList(list) {
            this.subList = list
            this.saveBlock()
        },
        toggleListButton() {
            this.isEditingSubList = !this.isEditingSubList

            if (!this.isEditingSubList) {
                this.saveSubList(null)
            }
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
