<template>
    <div class="block--component">
        <label for="blockPositionField">Postion: </label>
        <input
            @input="debounceSaveBlock"
            id="blockPositionField"
            type="number"
            v-model="position"
        />
        <h5>Image</h5>
        <div class="block--details-form">
            <label for="imageUrlField">URL:</label>
            <input
                @input="debounceSaveBlock"
                id="imageUrlField"
                type="text"
                v-model="url"
            />
            <label for="imageHrefField">HREF:</label>
            <input
                @input="debounceSaveBlock"
                id="imageHrefField"
                type="text"
                v-model="href"
            />
            <label for="imageAltTextField">Alt Text:</label>
            <input
                @input="debounceSaveBlock"
                id="imageAltTextField"
                type="text"
                v-model="altText"
            />
        </div>
    </div>
</template>

<script>
import DebounceMixin from '../../mixins/debounce'

export default {
    mixins: [
        DebounceMixin
    ],
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
            altText: '',
            href: '',
            position: null,
            type: 'NavImage',
            url: ''
        }
    },
    mounted() {
        this.position = parseInt(
            this.$props.blockNumber.slice(this.$props.blockNumber.length - 1)
            , 10
        )
    },
    methods: {
        saveBlock() {
            this.$store.commit('updateColumnContent', {
                column: this.$props.columnNumber,
                data: this.$data,
                block: this.$props.blockNumber
            })
        }
    }
}
</script>

<style scoped></style>
