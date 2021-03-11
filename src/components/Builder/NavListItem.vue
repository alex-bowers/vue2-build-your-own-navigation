<template>
    <li class="item--form">
        <span class="item--form--header">Item {{ itemNumber }}</span>
        <span class="item--form--fields">
            <label for="listItemLabelField">Item Label:</label>
            <input
                id="listItemLabelField"
                type="text"
                v-model="label"
            />
            <label for="listItemlHrefField">Item HREF:</label>
            <input
                id="listItemlHrefField"
                type="text"
                v-model="href"
            />
        </span>
    </li>
</template>

<script>
export default {
    props: {
        itemNumber: {
            default: null,
            type: Number
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
