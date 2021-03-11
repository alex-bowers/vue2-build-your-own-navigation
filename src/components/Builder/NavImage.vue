<template>
    <div class="block--component">
        <h5>Image</h5>
        <div class="block--details-form">
            <label for="imageUrlField">URL:</label>
            <input
                id="imageUrlField"
                type="text"
                v-model="url"
            />
            <label for="imageHrefField">HREF:</label>
            <input
                id="imageHrefField"
                type="text"
                v-model="href"
            />
            <label for="imageAltTextField">Alt Text:</label>
            <input
                id="imageAltTextField"
                type="text"
                v-model="altText"
            />
        </div>
        <button
            @click.prevent="saveBlock"
        >Save</button>
    </div>
</template>

<script>
export default {
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
            type: 'NavImage',
            url: ''
        }
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
